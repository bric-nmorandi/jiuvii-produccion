import { Component } from '@angular/core';
import { AF } from "../../providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public error: any;

  constructor(private afService: AF, private router: Router) { }

  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data);
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }

  loginWithFacebook() {
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data);
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }
}
