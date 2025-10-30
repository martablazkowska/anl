import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ITodo } from '../../types/todo.types';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todoService: TodoService = inject(TodoService);
  todoForm: FormGroup;

  constructor() {
    this.todoForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  public submitTodoForm = () => {
    this.todoService.addTodo(this.todoForm.value.title ?? '');
    this.todoForm.reset();
  };
}
