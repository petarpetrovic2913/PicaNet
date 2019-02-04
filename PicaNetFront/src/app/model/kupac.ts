import { EntityBase } from './entity-base';
import { Narudzbina } from './narudzbina';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Kupac extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: string;
   storeId: string;
   ime: string;
   prezime: string;
   telefon: string;
   email: string;
   ulica: string;
   grad: string;
   stanje: string
   drzava: string;
   zip: string;
   narudzbine: Narudzbina[];
}

