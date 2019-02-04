import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { BreezeBridgeAngularModule } from 'breeze-bridge-angular';
import { NamingConvention } from 'breeze-client';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { PicaRepositoryService } from './shared/picarepository.service';
import { KupciListaComponent } from './kupci/kupci-lista.component';
import { KupacIzListeComponent } from './kupci/kupac-iz-liste/kupac-iz-liste.component';
import { KupacDetaljiComponent } from './kupci/kupac-detalji/kupac-detalji.component';
import { ProizvodiNarudzbineConcatProizvodPipe } from './shared/proizvodi-narudzbine-concat-proizvodi.pipe';
import { InitGuard } from './shared/init-guard';
import { NarudzbinaComponent } from './narudzbine/narudzbina/narudzbina.component';
import { ListaProizvodaComponent } from './narudzbine/lista-proizvoda/lista-proizvoda.component';

@NgModule({
  declarations: [
    AppComponent,
    KupciListaComponent,
    KupacIzListeComponent,
    KupacDetaljiComponent,
    ProizvodiNarudzbineConcatProizvodPipe,
    NarudzbinaComponent,
    ListaProizvodaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BreezeBridgeAngularModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [PicaRepositoryService,InitGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    NamingConvention.camelCase.setAsDefault();
  }
}
