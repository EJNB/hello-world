import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  //este es el valor q se va a tranformar
  transform(value: any, limit?: number): any {
    if(!value)
      return null;

    let actualLimit = limit ? limit: 50;
    return (<string>value).substr(0,25) + '....';
  }

}
