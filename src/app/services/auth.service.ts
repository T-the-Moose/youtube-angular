import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiAuth;

  private readonly httpClient: HttpClient = inject(HttpClient)

  register(userData: User): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/signup`, userData);
  }

  login(credentials: User): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
