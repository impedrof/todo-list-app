import { Component, OnInit } from '@angular/core';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  listTask: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.listTask = this.taskService.getAll();
  }

  changeTaskStatus(stChange: MatSlideToggleChange, task: Task): void {
    this.taskService.changeStatus(stChange.checked, task);
    this.listTask = this.taskService.getAll();
  }

  removeTask(task: Task): void {
    this.taskService.remove(task);
    this.listTask = this.taskService.getAll();
  }

}
