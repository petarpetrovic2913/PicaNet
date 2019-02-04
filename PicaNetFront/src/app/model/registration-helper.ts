import { MetadataStore } from 'breeze-client';

import { Kupac } from './kupac';
import { Narudzbina } from './narudzbina';
import { ProizvodNarudzbine } from './proizvod-narudzbine';
import { OpcijaProizvodaNarudzbine } from './opcija-proizvoda-narudzbine';
import { OpcijaProizvoda } from './opcija-proizvoda';
import { Proizvod } from './proizvod';
import { VelicinaProizvoda } from './velicina-proizvoda';
import { StatusNarudzbine } from './status-narudzbine';

export class RegistrationHelper {

    static register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('Kupac', Kupac);
        metadataStore.registerEntityTypeCtor('Narudzbina', Narudzbina);
        metadataStore.registerEntityTypeCtor('ProizvodNarudzbine', ProizvodNarudzbine);
        metadataStore.registerEntityTypeCtor('OpcijaProizvodaNarudzbine', OpcijaProizvodaNarudzbine);
        metadataStore.registerEntityTypeCtor('OpcijaProizvoda', OpcijaProizvoda);
        metadataStore.registerEntityTypeCtor('Proizvod', Proizvod);
        metadataStore.registerEntityTypeCtor('VelicinaProizvoda', VelicinaProizvoda);
        metadataStore.registerEntityTypeCtor('StatusNarudzbine', StatusNarudzbine);
    }
}
