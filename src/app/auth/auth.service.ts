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
        this.setAuthToken(user.username);
        return user;
      }
    }
    return null;
  }

  logoutUser(): void {
    this.setAuthToken(null);
  }

  isLoggedIn(): boolean {
    return this.getAuthToken() !== null;
  }

  getLoggedInUser(): any {
    const username = this.getAuthToken();
    if (username) {
      return this.mockUsers.find(user => user.username === username);
    }
    return null;
  }

  updateUser(firstName: string, lastName: string, username: string): any {
    const user = this.getLoggedInUser();
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.username = username;
    }
    return user;
  }
}
