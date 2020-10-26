import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/common/users';
import { StaffService } from 'src/app/services/staff.service';
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
  notEmp: boolean = true;
  
  constructor(private token: TokenStorageService,
              public user: Users,
              private es: StaffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.currUser = this.token.getUser();
    if (this.user.picData == null) {
      this.isImg = false;
    } else {
      this.isImg = true;
    }
    if (this.user.category.name == 'CUSTOMER') {
      this.notEmp = true;
    } else {
      this.notEmp = false;
    }
  }

  removeBtn(num: number) {
    this.es.deleteEmp(num);
  }

  moveToInsertForm() {
    this.router.navigateByUrl('emp-form');
  }

  showEmp() {
    const empId: number = +this.route.snapshot.paramMap.get('id');

    this.es.getEmp(empId).subscribe(
      data => console.log(data)
    );
  }

  signout() {
    this.token.signOut()
  }
}