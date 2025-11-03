import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiSearchComponent } from './pages/ai-search/ai-search.component';

const routes: Routes = [
  {
    path: '',
    component: AiSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiRoutingModule {}
