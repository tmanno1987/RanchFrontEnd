import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserCategory } from '../common/user-category';
import { Users } from '../common/users';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  baseUrl: string = 'http://localhost:8080/api/userses';
  catUrl: string = 'http://localhost:8080/api/user-category';

  constructor(private http: HttpClient) { }

  getEmpList(name: number): Observable<Users[]> {
    const url = `${this.baseUrl}/search/findByCategoryId?id=${name}`;
    return this.http.get<GetUserResp>(url).pipe(
      map(resp => resp._embedded.userses)
    );
  }

  getEmp(eid: number): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/${eid}`);
  }

  getEmpCategorys(): Observable<UserCategory[]> {
    return this.http.get<GetCategory>(this.catUrl).pipe(
      map(resp => resp._embedded.userCategory)
    );
  }

  getEmpListPaginate(page: number, size: number, cid: number): Observable<GetUserResp> {
    const search = `${this.baseUrl}/search/findByCategoryId?id=${cid}&page=${page}&size=${size}`;
    return this.http.get<GetUserResp>(search);
  }

  searchEmpListPaginate(page: number, size: number, keys: string): Observable<GetUserResp> {
    const search = `${this.baseUrl}/search/findByNameContaining?name=${keys}&page=${page}&size${size}`;
    return this.http.get<GetUserResp>(search);
  }

  searchEmp(word: string): Observable<Users[]> {
    const url = `${this.baseUrl}/search/findByNameContaining?name=${word}`;
    return this.http.get<GetUserResp>(url).pipe(
      map(resp => resp._embedded.userses)
    );
  }

  insertEmp(emp: Users): void {
    this.http.post(this.baseUrl, emp, options).subscribe(
      (r) => console.log(r)
    );
  }

  deleteEmp(eid: number): void {
    const url = `${this.baseUrl}/${eid}`;
    this.http.delete(url, options);
  }

  updateEmp(emp: Users): void {
    const url = `${this.baseUrl}/${emp.id}`;
    this.http.put(url, emp, options).subscribe(
      (r) => console.log(r)
    );
  }
}

interface GetCategory {
  _embedded: {
    userCategory: UserCategory[];
  }
}

interface GetUserResp {
  _embedded: {
    userses: Users[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}