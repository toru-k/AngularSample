import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserPipe } from './pipe/user.pipe';
import { UserDirective } from './directive/user.directive';
import { UserlistComponent } from './component/user/userlist/userlist.component';
import { SexPipe } from './pipe/sex.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatInputModule } from '@angular/material';
import { DetailComponent } from './component/user/detail/detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserPipe,
    UserDirective,
    UserlistComponent,
    SexPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
