import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCategory } from 'src/app/common/user-category';
import { Users } from 'src/app/common/users';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emplist: Users[] = [];
  category: UserCategory[] = [];
  currCatId: number;
  page: number = 1;
  size: number = 0;
  elems: number = 0;

  constructor(private es: StaffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {this.listEmployees(), this.getCategories()});
  }

  getCategories() {
    this.es.getEmpCategorys().subscribe(
      data => this.category = data
    );
  }

  listEmployees(): void {
    const keys: string = this.route.snapshot.paramMap.get('keyword');

    if (this.route.snapshot.paramMap.has('keyword')) {
      this.es.searchEmp(keys).subscribe(
        data => this.emplist = data
      );
    } else {
      if (this.route.snapshot.paramMap.has('id')) {
        // has current id
        this.currCatId = +this.route.snapshot.paramMap.get('id');
      } else {
        // id not found set to 1
        this.currCatId = 1;
      }
      this.es.getEmpList(this.currCatId).subscribe(
        data => this.emplist = data
      );
    }
  }

  private processResults() {
    return data => {
      this.emplist = data._embedded.userses;
      this.page = data.page.number+1;
      this.size = data.page.size;
      this.elems = data.page.totalElements;
    };
  }

  updatePageSize(size: number) {
    this.size = size;
    this.page = 1;
    this.listEmployees();
  }

  handleListEmployees() {
    this.es.getEmpListPaginate(this.page-1, this.size, this.currCatId).subscribe(
      this.processResults()
    );
  }

  handleSearchEmployees() {
    const keys: string = this.route.snapshot.paramMap.get('keyword');
    this.es.searchEmpListPaginate(this.page-1, this.size, keys).subscribe(
      this.processResults()
    );
  }
}
