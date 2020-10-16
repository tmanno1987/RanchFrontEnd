import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/common/users';
import { TokenStorageService } from '../../serv/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currUser: any;
  strArray: string[] = [
    'Username: ', 'Position: ', 'Email: ', 'First Name: ', 
    'Last Name: ', 'Phone Number: ', 'Address: ', 'City: ', 
    'State: ', 'Zip Code: ', 'Salary: ', 'Current Tasks: '
  ];
  isImg: boolean = false;
  
  constructor(private token: TokenStorageService,
              private user: Users) { }

  ngOnInit(): void {
    this.currUser = this.token.getUser();
  }
}