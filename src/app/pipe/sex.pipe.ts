import { Pipe, PipeTransform } from '@angular/core';
import { Sex } from '../enum/sample.enum';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {
  transform(sexEnum: Sex): string {
    let sex = '';
    switch (sexEnum) {
      case Sex.man:
        sex = 'Man';
        break;
      case Sex.woman:
        sex = 'Women';
        break;
      default:
        break;
    }
    return sex;
  }
}
