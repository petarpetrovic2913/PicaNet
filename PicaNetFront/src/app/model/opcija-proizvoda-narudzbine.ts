import { EntityBase } from './entity-base';
import { ProizvodNarudzbine } from './proizvod-narudzbine';
import { OpcijaProizvoda } from './opcija-proizvoda';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class OpcijaProizvodaNarudzbine extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   storeId: string;
   proizvodNarudzbineId: number;
   opcijaProizvodaId: number;
   kolicina: number;
   cena: number;
   proizvodNarudzbine: ProizvodNarudzbine;
   opcijaProizvoda: OpcijaProizvoda;
}

