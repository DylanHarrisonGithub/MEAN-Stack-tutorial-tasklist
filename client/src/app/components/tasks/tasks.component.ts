import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  ngOnInit() {
  }

}
