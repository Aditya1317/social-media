import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/create`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, {
      responseType: 'text',
    });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/get/${id}`);
  }

  updateUserById(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update/${id}`, user);
  }

  getAllUsers(
    page: number,
    size: number,
    sortBy: string,
    sortOrder: boolean
  ): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/all?page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    );
  }
}
