import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { AF } from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { NavPrimaryComponent } from './nav-primary/nav-primary.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBRIa0R6zpmYX7NBlZHQId7dxQn4Gvg-f0",
  authDomain: "jiuvii-72bc4.firebaseapp.com",
  databaseURL: "https://jiuvii-72bc4.firebaseio.com",
  storageBucket: "jiuvii-72bc4.appspot.com",
  messagingSenderId: "1084072695660"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent},
  { path: 'reset-password', component: ResetPasswordPageComponent},
  { path: 'panel-user', component: PanelUserComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent, ResetPasswordPageComponent, PanelUserComponent, NavPrimaryComponent ],
  bootstrap: [ AppComponent ],
  providers: [ AF ]
})
export class AppModule {}
