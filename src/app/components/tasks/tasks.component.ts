import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: Tasks[];
  currTaskId: number;
  page: number = 1;
  size: number = 10;
  elems: number = 0;

  constructor(private ts: TaskService,
              private task: Tasks,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listTasks();
    });
  }

  updatePageSize(s: number) {
    this.size = s;
    this.page = 1;
    this.listTasks();
  }

  handleListTasks() {
    this.ts.getTaskListPaginate(this.page-1,this.size,this.currTaskId)
      .subscribe(this.processResults());
  }

  handleSearchTasks() {
    const keyword = this.route.snapshot.paramMap.get('keyword');
    this.ts.searchTaskListPaginate(this.page-1, this.size, keyword).subscribe(this.processResults());
  }

  listTasks() {
    const keyword = this.route.snapshot.paramMap.get('keyword');

    if ()

    if (this.route.snapshot.paramMap.has('keyword')) {
      this.ts.getTaskList().subscribe(
        data => {
          this.taskList = data;
        }
      );
    } else {

    }
  }

  getCategories(): Observable<Tasks> {

  }

  private processResults() {
    return data => {
      this.taskList = data._embedded.taskses;
      this.page = data.page.number+1;
      this.size = data.page.size;
      this.elems = data.page.totalElements;
    };
  }
}
