import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { Kupac } from '../../model/kupac';
import { PicaRepositoryService } from '../../shared/picarepository.service';

@Component({
  selector: 'pica-kupac-iz-liste',
  templateUrl: './kupac-iz-liste.component.html',
  styleUrls: ['./kupac-iz-liste.component.css']
})
export class KupacIzListeComponent implements OnInit {

  private jeIzabran: boolean;

  constructor( private _picaRepository : PicaRepositoryService) { }

  @Input()
  public kupac: Kupac;

  @Input()
  public set izabranKupac(value: Kupac){
    if(value == this.kupac){
      this.jeIzabran = true;
    }
    else{
      this.jeIzabran = false;
    }
  }

  @Output()
   obrisan = new EventEmitter<void>();

  ngOnInit() {
  }

  obrisiKupca(){
    this._picaRepository.obrisiKupca(this.kupac).then( _=>
      this._picaRepository.saveChanges()).then(_=>this.obrisan.emit(),error => console.error(error));
  }

}
