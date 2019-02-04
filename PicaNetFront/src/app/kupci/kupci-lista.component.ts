import { Component, OnInit } from '@angular/core';
import { PicaRepositoryService } from '../shared/picarepository.service';
import { Kupac } from '../model/entity-model';

@Component({
  selector: 'pica-kupci-lista',
  styleUrls: ['./kupci-lista.component.css'],
  templateUrl: './kupci-lista.component.html',
})
export class KupciListaComponent implements OnInit {

  private izabranKupac: Kupac
  private paramPretraga: string = 'ime';
  private pretragaUnos: string;
  private trenutnaStranica: number =1;
  private brojStranica: number;
  private _brojZapisa : number;
  private _velicinaStranice:number = 5;

  constructor(private _picaRepository: PicaRepositoryService) { }

  kupci: Kupac[];

  ngOnInit() {
    this.osvezi(1);
  }

  stranicaGore() {
    if (this.trenutnaStranica * this._velicinaStranice >= this._brojZapisa) return;
    let novaStranica = this.trenutnaStranica + 1;
    this.osvezi(novaStranica);
  }

  stranicaDole() {
    if (this.trenutnaStranica == 1) return;
    let  newPage = this.trenutnaStranica - 1;
    this.osvezi(newPage);
  }

  osvezi(stranica: number = 1) {
    this.pretragaUnos = "";
    this._picaRepository.getKupci(stranica, this._velicinaStranice).then(result => {
      this.kupci = result.kupci;
      this._brojZapisa = result.brojZapisa;
      this.brojStranica = Math.floor(this._brojZapisa / this._velicinaStranice);
      if (this.brojStranica < (this._brojZapisa / this._velicinaStranice)) this.brojStranica += 1;
      this.trenutnaStranica = stranica;
    },
      error => console.error(error));
  }

  save() {
    this._picaRepository.saveChanges().then(() => {
      this.ngOnInit();
    }, error => console.error(error));
  }

  izabran(kupac: Kupac) {
    this.izabranKupac = kupac;
  }

  pretraga(vrednost) {
    // this.kupci = <Kupac[]>this._picaRepository.pretraziIzKesa(vrednost,this.paramPretraga);
    this._picaRepository.pretraziIzBaze(vrednost, this.paramPretraga)
      .then(kupci => {
        this.kupci = kupci;
      });
  }
}
