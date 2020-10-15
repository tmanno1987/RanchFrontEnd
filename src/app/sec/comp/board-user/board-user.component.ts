import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getUserBoard().subscribe(
      d => {
        this.content = d;
      }, 
      e => {
        this.content = JSON.parse(e.error).message;
      }
    );
  }
}