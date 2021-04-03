import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Task} from '../shared/task';
import {TaskService} from '../shared/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  formTask: FormGroup;
  task: Task = new Task();
  editando: boolean;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param) => {
      if (param.id) {
        // tslint:disable-next-line:radix
        const id = parseInt(param.id);
        this.task = this.taskService.getById(id);
        this.formTask = this.fb.group({
          description: [this.task.description]
        });
        this.editando = true;
      } else {
        this.formTask = this.fb.group({
          description: [null]
        });
        this.editando = false;
      }
    });

  }

  saveTask(): void {
    const description = this.formTask.get('description')?.value;
    if (this.editando) {
      const editTask = new Task(this.task.id, description, this.task.status);
      this.taskService.edit(editTask);
    } else {
      const newTask = new Task(null, description, null);
      this.taskService.create(newTask);
    }
    this.router.navigate(['']);
  }

}
