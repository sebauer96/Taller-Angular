import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superpoder'
})
export class SuperpoderPipe implements PipeTransform {

  transform(value: string, superpoder: string): unknown {
    return `${value}. Su superpoder es : ${superpoder}`;
  }

}
