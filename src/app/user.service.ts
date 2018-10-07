import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(userId) {
    return this.http.get<User>(`${this.url}/${userId}`);
  }
}
