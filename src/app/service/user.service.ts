import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the app
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // Update with your backend API URL
  private apigetUrl = 'http://localhost:8080/userlist'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apigetUrl);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
