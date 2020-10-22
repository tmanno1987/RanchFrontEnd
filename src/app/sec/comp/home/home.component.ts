import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inUrl: string = 'http://localhost:8080/api/auth/signin';
  upUrl: string = 'http://localhost:8080/api/auth/signup';

  constructor(private us: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void { }

  signin() {
    // sign into site
    
  }

  signup() {
    // sign up for site access

  }
}
