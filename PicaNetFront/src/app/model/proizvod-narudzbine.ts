import { EntityBase } from './entity-base';
import { Narudzbina } from './narudzbina';
import { OpcijaProizvodaNarudzbine } from './opcija-proizvoda-narudzbine';
import { Proizvod } from './proizvod';
import { VelicinaProizvoda } from './velicina-proizvoda';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class ProizvodNarudzbine extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   storeId: string;
   narudzbinaId: number;
   proizvodId: number;
   velicinaProizvodaId: number;
   kolicina: number;
   cenaJedinice: number;
   cena: number;
   instrukcije: string;
   opcije: OpcijaProizvodaNarudzbine[];
   narudzbina: Narudzbina;
   proizvod: Proizvod;
   velicina: VelicinaProizvoda;
}

