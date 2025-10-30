import { Component, Input } from '@angular/core';
import { ITodo } from '../../types/todo.types';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() public todos: ITodo[] = [];
}
