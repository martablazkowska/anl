import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@anl/features/layout/layout.module';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('@anl/features/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('@anl/features/todo/todo.module').then((m) => m.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LayoutModule],
})
export class AppRoutingModule {}
