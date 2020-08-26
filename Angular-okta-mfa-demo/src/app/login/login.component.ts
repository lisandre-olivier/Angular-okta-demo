import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fromUri = 'http://localhost:8081/home';

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.loginRedirect(this.fromUri);
  }
  ngOnInit() { }

}
