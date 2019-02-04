import { Pipe, PipeTransform } from '@angular/core';

import { ProizvodNarudzbine, Proizvod } from '../model/entity-model';

@Pipe({
    name: 'proizvodinarudzbineconcatproizvod'
})

export class ProizvodiNarudzbineConcatProizvodPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        let proizvodiNarudzbine = value as ProizvodNarudzbine[];
        let result = "";
        if (proizvodiNarudzbine){
            let prvi: boolean = true;
            proizvodiNarudzbine.forEach(oi =>{
                if (!prvi) result += ", ";
                prvi = false;
                result += oi.proizvod.ime;
            });
        }
        return result;
    }
}
