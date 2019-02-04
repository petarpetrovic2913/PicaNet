import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kupac, Narudzbina } from '../../model/entity-model';
import { PicaRepositoryService } from '../../shared/picarepository.service';

@Component({
  selector: 'pica-kupac-detalji',
  templateUrl: './kupac-detalji.component.html',
  styleUrls: ['./kupac-detalji.component.css']
})
export class KupacDetaljiComponent implements OnInit {

  private kupac: Kupac = new Kupac();
  private errorMessage: string;
  private mogucaIzmena: boolean = true;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _picaRepository: PicaRepositoryService) { }

  narudzbine: Narudzbina[];

  ngOnInit() {
    if (this._route.routeConfig.path != "kupac-dodaj") {
      this.mogucaIzmena = true;
      let id = this._route.snapshot.params['kupacId'];
      this._picaRepository.getKupac(id).then((kupac) => {
        this.kupac = kupac;
        this._picaRepository.getKupacIstorijaNarucivanja(id).then(narudzbine => this.narudzbine = narudzbine);
      }, (error) => {
        this.errorMessage = error.message;
      });
    }
    else {
      this.kupac = <Kupac>this._picaRepository.dodajKupca("Kupac");
    }
  }

  onSave() {
    this._picaRepository.saveChanges().then(() => {
      this._router.navigate(['kupci-lista']);
    }, error => {
      this.errorMessage = error.message;
    })
  }

}
