import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/class/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { USERS } from 'src/app/mock/mock-user';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import * as _moment from 'moment';
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM'
  }
};

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ja-JP'
    }
  ]
})
export class DetailComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    // JavaScript (+) 演算子は文字列を数値に変換します。
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = USERS.find(user => user.id === id);
  }

  goBack(): void {
    this.location.back();
  }
}
