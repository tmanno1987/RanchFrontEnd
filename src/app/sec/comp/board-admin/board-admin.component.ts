import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getAdminBoard().subscribe(
      d => {
        this.content = d;
      }, 
      e => {
        this.content = JSON.parse(e.error).message;
      }
    );
  }
}