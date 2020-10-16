import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { AuthService } from '../../serv/auth.service';

const fileBlob: Blob[] = [];

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
  isImg: boolean;
  
  constructor(private as: AuthService, private upserv: UploadService) { }

  ngOnInit(): void {
    if (this.isImg) {
      // ...
    } else {
      this.upserv.upload(new File(fileBlob, 'assets/images/person-placeholder.jpg'));
    }
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