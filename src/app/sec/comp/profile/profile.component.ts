import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../serv/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currUser = this.token.getUser();
  }
    
}
