import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-board-mod',
  templateUrl: './board-mod.component.html',
  styleUrls: ['./board-mod.component.css']
})
export class BoardModComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getModBoard().subscribe(
      d => {
        this.content = d;
      }, 
      e => {
        this.content = JSON.parse(e.error).message;
      }
    );
  }
}