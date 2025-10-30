import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent, TodoListComponent } from './components';
import { TodoDetailsPageComponent, TodoPageComponent } from './pages';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailsPageComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, RouterModule, ReactiveFormsModule],
})
export class TodoModule {}
