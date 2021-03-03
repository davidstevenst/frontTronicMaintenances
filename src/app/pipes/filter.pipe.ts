import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const resultPipe = [];

    for(const filter of value){
      if(filter.nombre.toLowerCase().indexOf(arg.toLowerCase())> -1){
        resultPipe.push(filter)
      }
    };
    return resultPipe;

  }

}
