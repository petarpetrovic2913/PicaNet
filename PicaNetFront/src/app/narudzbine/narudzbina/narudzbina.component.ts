import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Narudzbina, ProizvodNarudzbine, Kupac, Proizvod, StatusNarudzbine } from '../../model/entity-model';
import { PicaRepositoryService } from '../../shared/picarepository.service';

@Component({
  selector: 'pica-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {

  constructor(private _picaRepository: PicaRepositoryService,
    private _route: ActivatedRoute,
    private _router: Router)
  { }

  private _narudzbina: Narudzbina = null;
  private _kupacId = '';

  private proizvodiNarudzbine: ProizvodNarudzbine[] = [];

  private pice: Proizvod[] = [];
  private salate: Proizvod[] = [];
  private napici: Proizvod[] = [];

  private selectedTab: string = "pice";
  private _statusNarudzbineId: number;

  ngOnInit() {
    this._kupacId = this._route.snapshot.params['kupacId'];
    if (!this._kupacId) {
      this._router.navigate(['']);
    }
    else {
      let statusiNarudzbina = this._picaRepository.getNarudzbinaStatusi();
      statusiNarudzbina.forEach(os => { if (os.ime == "Ordered")  {
      this._statusNarudzbineId = os.id;} });
      this._picaRepository.getProizvodi().then(proizvodi => {
        proizvodi.forEach(proizvod => {
          switch (proizvod.tip) {
            case 'Pizza':
              this.pice.push(proizvod);
              break;
            case 'salad':
              this.salate.push(proizvod);
              break;
            case 'drink':
              this.napici.push(proizvod);
              break;
            default:
              break;
          }
        });
      });
    }
  }

  dodaj_u_narudzbinu(proizvodInfo: any) {
    if (!this._narudzbina) {
      this._narudzbina = <Narudzbina>this._picaRepository.dodajKupca("Narudzbina");
      this._narudzbina.kupacId = this._kupacId;
      this._narudzbina.statusNarudzbineId = this._statusNarudzbineId;
      this._narudzbina.datumNarudzbine = new Date();
    }
    var proizvodNarudzbine = <ProizvodNarudzbine>this._picaRepository.dodajKupca("ProizvodNarudzbine");
    proizvodNarudzbine.narudzbinaId = this._narudzbina.id;
    proizvodNarudzbine.proizvod = proizvodInfo.proizvod;
    proizvodNarudzbine.velicina = proizvodInfo.velicina;
    this._narudzbina.proizvodiNarudzbine.push(proizvodNarudzbine);
    this.proizvodiNarudzbine.push(proizvodNarudzbine);
  }

  potvrdiNarudzbinu() {
    if (this._narudzbina == null) return;
    this._picaRepository.potvrdiNarudzbinu(this._narudzbina).then(_ => {
      this._narudzbina= null;
      this.proizvodiNarudzbine = [];
      alert("Poruceno!");
      this._router.navigate(['/']);
    }, function (error) {
      alert("Greska pri porucivanju: " + error.message);
    });
  }

otkaziNarudzbinu() {
    if (this._narudzbina == null) return;
    let entityManager = this._narudzbina.entityAspect.entityManager;
    console.log(entityManager.getChanges());
    this._narudzbina.entityAspect.rejectChanges();
    this.proizvodiNarudzbine.forEach(oi => oi.entityAspect.rejectChanges());
    
    this._narudzbina = null;
    this.proizvodiNarudzbine = [];
    this._router.navigate(['/']);
    console.log(entityManager.getChanges());
  }
}