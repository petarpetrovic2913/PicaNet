import { Injectable } from '@angular/core';
import {EntityManager, EntityQuery, Predicate,FilterQueryOp,EntityState,Entity,core } from 'breeze-client';
import { Kupac , Narudzbina ,Proizvod , VelicinaProizvoda ,StatusNarudzbine  } from '../model/entity-model';
import { RegistrationHelper } from '../model/registration-helper';


@Injectable()
export class PicaRepositoryService {

  private _em: EntityManager =  new EntityManager("http://localhost:57602/breeze/PicaNet");
    
  constructor(){
     RegistrationHelper.register(this._em.metadataStore);
  }

  private _inicijalizovan: boolean;
  initialize(){
    let promise = new Promise<boolean>((resolve,reject) => {
      if(this._inicijalizovan) resolve(true);
      else {
        this._inicijalizovan = true;     
        this._em.executeQuery(EntityQuery.from("VelicineProizvoda")).then(response=>{
          this._em.executeQuery(EntityQuery.from("OpcijeProizvoda")).then(response=>{
            this._em.executeQuery(EntityQuery.from("StatusiNarudzbina")).then(response=>{
              resolve(true);
            })
          })
        }, err => {console.error(err)});
      }
    });  

    return promise;
  }

  getNarudzbinaStatusi() : StatusNarudzbine[] {
    return this._em.executeQueryLocally(EntityQuery.from("StatusiNarudzbina")) as StatusNarudzbine[];
  }

  getVelicineProizvoda(tipProizvoda:string) : VelicinaProizvoda[] {
    return this._em.executeQueryLocally(EntityQuery.from("VelicineProizvoda").where("tip","equals",tipProizvoda)) as VelicinaProizvoda[];

  }

  getProizvodi(): Promise<Proizvod[]> {
    let promise = new Promise<Proizvod[]>((resolve, reject) => {
      let query = EntityQuery.from("Proizvodi");
      let proizvodi = this._em.executeQueryLocally(query) as Proizvod[];
      if (proizvodi && proizvodi.length > 0) {
        resolve(proizvodi);
        return;
      }
      this._em.executeQuery(query).then(response => {
        resolve(response.results as Proizvod[]);
      }, error => reject(error));
    });
    return promise;
  }


  dodajKupca(tip:string):Entity {
    let opcije : any = {};
    if(tip === 'Kupac'){
      opcije.id = core.getUuid();
      console.log(opcije.id);
    }
      return this._em.createEntity(tip,opcije);
  }

  getKupci(stranica:number , velicinaStranica:number) : Promise<any>{
    let promise = new Promise<any>((resolve,reject) => {
        let query = EntityQuery.from("Kupci")
        .skip((stranica-1)*velicinaStranica)
        .take(velicinaStranica)
        .inlineCount();
        this._em.executeQuery(query).then( queryResult => {
          resolve({ kupci:queryResult.results, brojZapisa: queryResult.inlineCount });
        }, 
          error => reject(error))
    });
    return promise;
  }

  getKupac(id:string): Promise<any> {
    let promise = new Promise((resolve,reject)=>{
      let query = EntityQuery.from("Kupci").where("id","equals",id)
      if(!this._em.metadataStore.isEmpty()){
        let kupci = this._em.executeQueryLocally(query);
        if(kupci && kupci.length == 1){
          resolve(kupci[0]);
          return;
        }
      }
      this._em.executeQuery(query).then(response => {
        if(response.results && response.results.length == 1 )
          resolve(response.results[0]);
        else
          resolve(null);
      }, error => reject(error));
    });
    return promise;
  }

  getKupacIstorijaNarucivanja(kupacId: string): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      let query = EntityQuery.from("Narudzbine")
        .where("kupacId", FilterQueryOp.Equals, kupacId)
        .expand(["proizvodiNarudzbine", "proizvodiNarudzbine.proizvod","proizvodiNarudzbine.opcije"]);
      this._em.executeQuery(query).then(queryResult => {
        resolve(queryResult.results);
      }, error => reject(error));
    });
    return promise;
  }

  obrisiKupca(kupac : Kupac) : Promise<void> {
    return this.getKupacIstorijaNarucivanja(kupac.id).then( narudzbine => {
      narudzbine.slice().forEach(n => {
        n.proizvodiNarudzbine.slice().forEach(pn =>{
          pn.opcije.slice().forEach( opt => opt.entityAspect.setDeleted());
          pn.entityAspect.setDeleted();
        });
        n.entityAspect.setDeleted();
      });
        kupac.entityAspect.setDeleted();
    })
  }

  saveChanges(){
    let promise = new Promise((resolve,reject)=>{
        this._em.saveChanges().then(()=> resolve(),error=>reject(error));
    });
    return promise;
  }

  pretraziIzKesa(vrednost:string, paramPretraga:string){
    let pred: Predicate;
    if(paramPretraga === "ime"){
      pred = new Predicate("ime",FilterQueryOp.Contains,vrednost)
      .or(new Predicate("prezime",FilterQueryOp.Contains, vrednost))
    }
    else pred = new Predicate(paramPretraga,FilterQueryOp.Contains,vrednost);
    let query = EntityQuery.from("Kupci").where(pred);
    return this._em.executeQueryLocally(query);
  }

  pretraziIzBaze(vrednost:string, paramPretraga:string):Promise<Kupac[]>{
    let promise:any = new Promise((resolve,reject) =>{
      let pred: Predicate;
      if(paramPretraga === "ime"){
        pred = new Predicate("ime",FilterQueryOp.Contains,vrednost)
        .or(new Predicate("prezime",FilterQueryOp.Contains, vrednost))
      }
      else pred = new Predicate(paramPretraga,FilterQueryOp.Contains,vrednost);
      let query = EntityQuery.from("Kupci").where(pred);
      this._em.executeQuery(query)
          .then(queryResult => resolve(queryResult.results),
          error => reject(error));
    });
    return promise;
  }

  potvrdiNarudzbinu(narudzbina: Narudzbina): Promise<void> {    
    let  promise = new Promise<void>((resolve, reject) => {
      let proizvodiNarudzbine: Array<any> = [narudzbina];
      narudzbina.proizvodiNarudzbine.forEach(oi => proizvodiNarudzbine.push(oi));
      this._em.saveChanges(proizvodiNarudzbine).then(_ => resolve(), error => console.error(error));
    });
    return promise;
  }

}
