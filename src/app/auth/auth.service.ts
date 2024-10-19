import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockUsers: User[] = [
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      password: "password",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      username: "janedoe",
      password: "password",
    }
  ]

  constructor() { }

  getAuthToken(): string | null {
    return window.localStorage.getItem('authToken');
  }

  setAuthToken(token: string | null): void {
    if (token != null) {
      window.localStorage.setItem('authToken', token);
    } else {
      window.localStorage.removeItem('authToken');
    }
  }

  registerUser(data: User) {
    console.log('registerUser');
    this.mockUsers.push(data);
  }

  loginUser(data: User) {
    console.log('loginUser');
    for (let user of this.mockUsers) {
      if (user.username == data.username && user.password == data.password) {
        return user;
      }
    }
    return null;
  }
}
