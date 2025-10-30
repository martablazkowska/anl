import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../../types/todo.types';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-details-page',
  standalone: false,
  templateUrl: './todo-details-page.component.html',
  styleUrl: './todo-details-page.component.scss',
})
export class TodoDetailsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  todoService: TodoService = inject(TodoService);
  todoDetails: ITodo | undefined;

  constructor() {
    const todoId = Number(this.route.snapshot.params['id']);
    this.todoDetails = this.todoService.getTodoById(todoId);
  }
}
