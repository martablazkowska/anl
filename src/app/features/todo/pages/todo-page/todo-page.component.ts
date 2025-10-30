import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service.service';
import { ITodo } from '../../types/todo.types';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  todoService: TodoService = inject(TodoService);
  todoList: ITodo[] = [];

  constructor() {
    this.todoList = this.todoService.getAllTodos();
  }
}
