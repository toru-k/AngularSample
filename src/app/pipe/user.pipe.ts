import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class UserPipe implements PipeTransform {
  transform(date: string, format: string): string {
    return moment().format(format);
  }
}
