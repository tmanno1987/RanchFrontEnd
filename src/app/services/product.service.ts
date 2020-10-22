import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cattle } from '../common/cattle';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/cattles';

  constructor(private httpClient: HttpClient) { }

  getCattleList(): Observable<Cattle[]> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl).pipe(
      map(resp => resp._embedded.cattle)
    );
  }

  getCattleListPaginate(page: number, size: number): Observable<GetRespCattle> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl);
  }

  getCattle(cid: bigint): Observable<Cattle> {
    return this.httpClient.get<Cattle>(`${this.baseUrl}/${cid}`);
  }

  searchProductsPaginate(page: number, size: number, keys: string): Observable<any> {
    const search = `${this.baseUrl}/search/findByNameContaining?name=${keys}&page=${page}&size=${size}`;

    return this.httpClient.get<GetRespCattle>(search);
  }

  searchProducts() {

  }

  insertCattle(cattle: Cattle): void {
    let url = `http://localhost:8080/api/cattles`;
    this.httpClient.post(url, cattle, options).subscribe(
      (resp) => console.log(resp)
    );
  }
}

interface GetRespCattle {
  _embedded: {
    cattle: Cattle[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}