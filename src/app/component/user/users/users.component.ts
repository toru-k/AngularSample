import { Component, OnInit } from '@angular/core';
import { Sample, Sample2 } from 'src/app/enum/sample.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const enum1 = Sample.Sample1;
    console.log(this.sampleMethod(enum1));
    console.log(enum1);

    const enum2 = Sample2.Sample3;
    console.log(enum2);
    console.log(Sample2[enum2]);
  }

  sampleMethod(sample: Sample): string {
    let message = '';
    switch (sample) {
      case Sample.Sample1:
        message = 'It\'s Sample1.';
        break;
      case Sample.Sample2:
        message = 'It\'s Sample2.';
        break;
      case Sample.Sample3:
        message = 'It\'s Sample3.';
        break;
      default:
        message = 'not found.';
        break;
    }
    return message;
  }
}
