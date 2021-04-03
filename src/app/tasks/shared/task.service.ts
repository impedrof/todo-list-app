import { Injectable } from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 0, description: 'Task 1', status: false },
    { id: 1, description: 'Task 2', status: true },
    { id: 2, description: 'Task 3', status: false },
    { id: 3, description: 'Task 4', status: false },
    { id: 4, description: 'Task 5', status: true },
    { id: 5, description: 'Task 6', status: true },
    { id: 6, description: 'Task 7', status: false },
    { id: 7, description: 'Task 8', status: false },
    { id: 8, description: 'Task 9', status: false },
    { id: 9, description: 'Task 10', status: true },
    { id: 10, description: 'Task 11', status: true }
  ];

  constructor() { }

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  create(task: Task): void {
    const lastId = this.tasks[this.tasks.length - 1].id;
    const newTask = task;
    newTask.id = lastId + 1;
    newTask.description = task.description;
    newTask.status = false;
    this.tasks.push(newTask);
  }

  edit(task: Task): void {
    const indexTask = this.tasks.findIndex(item => item.id === task.id);
    this.tasks[indexTask].description = task.description;
    this.tasks[indexTask].status = task.status;
  }

  remove(task: Task): void {
    this.tasks = this.tasks.filter(item => item.id !== task.id);
  }

  changeStatus(status: boolean, task: Task): void {
    const indexTask = this.tasks.findIndex(item => item.id === task.id);
    this.tasks[indexTask].status = status;
  }
}
