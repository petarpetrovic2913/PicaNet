import { EntityBase } from './entity-base';
import { Kupac } from './kupac';
import { ProizvodNarudzbine } from './proizvod-narudzbine';
import { StatusNarudzbine } from './status-narudzbine';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Narudzbina extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   storeId: string;
   kupacId: string;
   statusNarudzbineId: number;
   datumNarudzbine: Date;
   datumIsporuke: Date;
   cenaIsporuke: number;
   ukupnoProizvoda: number;
   telefon: string;
   ulicaDostave: string;
   gradDostave: string;
   drzavaDostave: string;
   zipDostave: string;
   kupac: Kupac;
   proizvodiNarudzbine: ProizvodNarudzbine[];
   status: StatusNarudzbine;
}

