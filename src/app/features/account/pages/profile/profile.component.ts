import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { filter, fromEvent, map, Observable, of, switchMap, take } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public users: any;

  constructor(private usersService: UsersService) {
    this.usersService.users$
      .pipe(
        take(1),
        switchMap((users: any) => {
          return of(users.filter((user: any) => user.id > 5));
        })
      )
      .subscribe((val) => {
        console.log(val);
        this.users = val;
      });
  }
}
