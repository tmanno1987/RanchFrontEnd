import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cattle } from '../common/cattle';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/cattle';

  constructor(private httpClient: HttpClient) { }

  getCattleList(): Observable<Cattle[]> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl).pipe(
      map(resp => resp._embedded.cattle)
    );
  }

  getCattleListPaginate(page: number, size: number): Observable<GetRespCattle> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl);
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