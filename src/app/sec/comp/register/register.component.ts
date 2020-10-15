import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serv/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSeccessful: boolean = false;
  isFailed: boolean = false;
  errorMsg = '';

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.as.register(this.form).subscribe(
      d => {
        console.log(d);
        this.isSeccessful = true;
        this.isFailed = false;
      }, 
      e => {
        this.errorMsg = e.error.message;
        this.isFailed = true;
      }
    );
  }
}