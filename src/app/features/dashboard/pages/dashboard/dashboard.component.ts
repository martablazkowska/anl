import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  public increase() {
    this.count.update((val) => val + 1);
  }
  public decrease() {
    this.count.update((val) => val - 1);
  }
}
