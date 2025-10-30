import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, MainMenuComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, MainMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
