import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { Proizvod ,VelicinaProizvoda} from '../../model/entity-model';
import { PicaRepositoryService } from '../../shared/picarepository.service';

@Component({
  selector: 'pica-lista-proizvoda',
  templateUrl: './lista-proizvoda.component.html',
  styleUrls: ['./lista-proizvoda.component.css']
})
export class ListaProizvodaComponent implements OnInit {

  private izabraniProizvod : Proizvod;
  private izabranaVelicinaProizvodaId: number = -1;

  constructor(private _picaRepository: PicaRepositoryService) { }

  private velicineProizvoda: VelicinaProizvoda[];

  @Input()
  proizvodi : Proizvod[];
  @Input()
  tipProizvoda: string;

  @Output()
  dodajProizvod: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
      this.velicineProizvoda = this._picaRepository.getVelicineProizvoda(this.tipProizvoda);
  }

  izaberiProizvod(proizvod: Proizvod){
    this.izabraniProizvod = proizvod;
  }

  dodaj_u_narudzbinu(){
    let velicina = this.velicineProizvoda.find(ps => ps.id === this.izabranaVelicinaProizvodaId);
    this.izabranaVelicinaProizvodaId = -1;
    this.dodajProizvod.emit({ proizvod: this.izabraniProizvod ,velicina : velicina });
  }

}
