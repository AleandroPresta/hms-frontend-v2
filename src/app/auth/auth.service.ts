import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockUsers = [
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

  registerUser(data: any): any {
    // Check if user already exists
    for (let user of this.mockUsers) {
      if (user.username == data.username) {
        return null;
      }
    }
    this.mockUsers.push(data);
    return data;
  }

  loginUser(data: any) {
    for (let user of this.mockUsers) {
      if (user.username == data.username && user.password == data.password) {
        return user;
      }
    }
    return null;
  }
}
