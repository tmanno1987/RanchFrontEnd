import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tasks } from '../common/tasks';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = "http://localhost:8080/api/taskses";

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<Tasks[]> {
    return this.http.get<GetRespTasks>(this.baseUrl).pipe(
      map(resp => resp._embedded.taskses)
    );
  }

  getTask(catid: bigint): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.baseUrl}/${catid}`);
  }

  getTaskCategories(): Observable<String[]> {
    return this.http.get<GetRespCats>(this.baseUrl).pipe(
      map(resp => resp._embedded.taskses.taskType)
    );
  }

  getTaskListPaginate(page: number, size: number, currTaskId: number): 
    Observable<GetRespTasks> {
      const url: string = `${this.baseUrl}/search/findByTaskType?taskType=${currTaskId}&page=${page}&size=${size}`;
      return this.http.get<GetRespTasks>(url);
  }

  searchTaskListPaginate(page: number, size: number, keys: string):
    Observable<GetRespTasks> {
      const search: string = `${this.baseUrl}/search/findByNameContaining?name=${keys}&page=${page}&size=${size}`;
      return this.http.get<GetRespTasks>(search);
  }

  searchTasks(word: string): Observable<Tasks[]> {
    const searchUrl: string = `${this.baseUrl}/searchByNameContaining?name=${word}`;
    return this.http.get<GetRespTasks>(searchUrl).pipe(
      map(resp => resp._embedded.taskses)
    );
  }

  insertTask(task: Tasks): void {
    this.http.post(this.baseUrl, task, options).subscribe(
      (resp) => console.log(resp)
    );
  }
}

interface GetRespTasks {
  _embedded: {
    taskses: Tasks[];
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
    taskses: {
      taskType: string[];
    }
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}