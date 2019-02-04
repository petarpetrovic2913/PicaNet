import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KupciListaComponent } from '../kupci/kupci-lista.component'
import { KupacDetaljiComponent } from '../kupci/kupac-detalji/kupac-detalji.component';
import { InitGuard } from './init-guard';
import { NarudzbinaComponent } from '../narudzbine/narudzbina/narudzbina.component';

const routes: Routes = [
    {
       path: '', canActivateChild: [InitGuard], children: [
            { path: '', component: KupciListaComponent },
            { path: 'kupci-lista', component: KupciListaComponent },
            { path: 'kupac-detalji/:kupacId', component: KupacDetaljiComponent },
            { path: 'kupac-dodaj', component: KupacDetaljiComponent },
            { path: 'narudzbina/:kupacId', component: NarudzbinaComponent}
        ]
   }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }