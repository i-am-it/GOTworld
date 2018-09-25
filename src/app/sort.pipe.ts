import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.sort(function(a,b) {
      if(a.name === '' &&  b.name === '')
      {
        return (a.aliases[0] > b.aliases[0]) ? 1 : ((b.aliases[0] > a.aliases[0]) ? -1 : 0)
      }
      else if(a.name === '' &&  b.name !== '')
      {
        return (a.aliases[0] > b.name) ? 1 : ((b.name > a.aliases[0]) ? -1 : 0)
      }
      else if(a.name !== '' &&  b.name === '')
      {
        return (a.name > b.aliases[0]) ? 1 : ((b.aliases[0] > a.name) ? -1 : 0)
      }
      else{
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      }
      
    });
  }

}
