import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component'
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    PasswordComponent,
    RegisterComponent,
    SideMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path : 'login', component: LoginComponent  },
      { path : 'password', component: PasswordComponent},
      { path : 'register', component: RegisterComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
