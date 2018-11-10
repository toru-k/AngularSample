import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserPipe } from './pipe/user.pipe';
import { UserDirective } from './directive/user.directive';
import { UserlistComponent } from './component/user/userlist/userlist.component';
import { SexPipe } from './pipe/sex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserPipe,
    UserDirective,
    UserlistComponent,
    SexPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
