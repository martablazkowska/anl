import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  public users$: Observable<Object>;
  private http = inject(HttpClient);

  constructor() {
    this.users$ = this.getAllUsers();
  }

  public getUserById(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  private getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
