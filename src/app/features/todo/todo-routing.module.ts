import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsPageComponent, TodoPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent,
  },
  {
    path: 'details/:id',
    component: TodoDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
