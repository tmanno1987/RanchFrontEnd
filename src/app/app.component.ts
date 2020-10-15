import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './sec/serv/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'RanchFrontEnd';
  private roles: string[];
  isLoggedIn: boolean = false;
  showAdmin: boolean = false;
  showMod: boolean = false;
  username: string;
  
  constructor(private tss: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tss.getToken();

    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ADMIN');
      this.showMod = this.roles.includes('MOD');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tss.signOut();
    window.location.reload();
  }
}
