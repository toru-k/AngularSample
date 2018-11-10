import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/class/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { USERS } from 'src/app/mock/mock-user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
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
