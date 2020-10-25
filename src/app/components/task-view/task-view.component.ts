import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task: Tasks = new Tasks();

  constructor(private ts: TaskService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.showTask();
  }

  showTask() {
    const taskId: number = +this.route.snapshot.paramMap.get('id');
    this.ts.getTask(taskId).subscribe(
      data => {
        this.task = data
    });
  }

  addToInprogress(t: Tasks) {
    t.active = false;
    this.router.navigateByUrl(`taskses`);
  }
}
