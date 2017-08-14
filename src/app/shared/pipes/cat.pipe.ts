import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cat'
})
export class CatPipe implements PipeTransform {

    transform(value: any, args: string[]): any {
        let category = [];
        for (let key in value) {
            category.push({key: key, value: value[key]});
        }
        return category;
    }

}
