import { Component, OnInit } from '@angular/core';
import { Sample, Sample2 } from 'src/app/enum/sample.enum';
import { USERS } from '../../../mock/mock-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor() {}

  users = USERS;

  ngOnInit() {
    const enum1 = Sample.Sample1;
    console.log(Sample.sampleMethod(enum1));
    console.log(enum1);
    console.log(Sample[enum1]);

    const enum2 = Sample2.Sample3;
    console.log(enum2);
    console.log(Sample2[enum2]);
  }
}
