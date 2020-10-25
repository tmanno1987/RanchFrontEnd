import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cattle } from '../common/cattle';
import { CattleCategory } from '../common/cattle-category';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/cattles';
  private catsUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) { }

  getCattleList(): Observable<Cattle[]> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl).pipe(
      map(resp => resp._embedded.cattle)
    );
  }

  getCattleListPaginate(page: number, size: number): Observable<GetRespCattle> {
    return this.httpClient.get<GetRespCattle>(this.baseUrl);
  }

  getCattle(cid: number): Observable<Cattle> {
    return this.httpClient.get<Cattle>(`${this.baseUrl}/${cid}`);
  }

  getCategories(): Observable<CattleCategory[]> {
    return this.httpClient.get<GetRespCats>(this.catsUrl).pipe(
      map(resp => resp._embedded.categories)
    );
  }

  searchProductsPaginate(page: number, size: number, keys: string): Observable<any> {
    const search = `${this.baseUrl}/search/findByNameContaining?name=${keys}&page=${page}&size=${size}`;
    return this.httpClient.get<GetRespCattle>(search);
  }

  searchProducts(word: string): Observable<Cattle[]> {
    const searchUrl: string = `${this.baseUrl}/search/findByNameContaining?name=${word}`;
    return this.httpClient.get<GetRespCattle>(searchUrl).pipe(
      map(resp => resp._embedded.cattle)
    );
  }

  insertCattle(cat: Cattle): void {
    let url = `http://localhost:8080/api/cattles`;
    this.httpClient.post(url, cat, options).subscribe(
      (resp) => console.log(resp)
    );
  }

  deleteCattle(cat: Cattle) {
    const delUrl: string = `${this.baseUrl}/${cat.id}`;
    this.httpClient.delete(delUrl);
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

interface GetRespCats {
  _embedded: {
    categories: CattleCategory[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}