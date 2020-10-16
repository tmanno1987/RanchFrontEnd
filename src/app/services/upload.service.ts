import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const request = new HttpRequest('POST', `${this.baseUrl}upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(request);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}files`);
  }
}