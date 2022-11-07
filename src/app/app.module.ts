import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './component/users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
