import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getPublicContent().subscribe(
      d => {
        this.content = d;
      }, 
      e => {
        this.content = JSON.parse(e.error).message;
      }
    );
  }

}
