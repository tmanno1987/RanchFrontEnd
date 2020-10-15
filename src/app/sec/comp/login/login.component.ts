import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serv/auth.service';
import { TokenStorageService } from '../../serv/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMsg = '';
  roles: string[] = [];

  constructor(private as: AuthService, private ts: TokenStorageService) { }

  ngOnInit(): void {
    if (this.ts.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.ts.getUser().roles;
    }
  }

  onSubmit(): void {
    this.as.login(this.form).subscribe(
      d => {
        this.ts.saveToken(d.accessToken);
        this.ts.saveUser(d);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.ts.getUser().roles;
        this.reloadPage();
      },
      e => {
        this.errorMsg = e.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}