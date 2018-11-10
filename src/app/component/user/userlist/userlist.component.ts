import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/mock/mock-user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users = USERS;
  constructor() {}

  ngOnInit() {}
}
