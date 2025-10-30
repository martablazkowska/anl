import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AccountRoutingModule],
  providers: [UsersService],
})
export class AccountModule {}
