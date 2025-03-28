import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserAuth, UserRegister } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string | null = null;

  private readonly httpClient: HttpClient = inject(HttpClient)
  private apiUrlAuth = environment.apiAuth;

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getToken() !== null);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  register(userData: UserRegister): Observable<any> {
    return this.httpClient.post(`${this.apiUrlAuth}/signup`, userData);
  }

  login(credentials: UserAuth): Observable<any> {
    return this.httpClient.post(`${this.apiUrlAuth}/login`, credentials).pipe(
      tap((response: any) => {
        
        if (response.data) {
          // Stock le token dans le localStorage
          localStorage.setItem('token', response.data);
          this.token = response.data;

          // Met à jour l'état de connexion
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    this.token = this.getToken();
    return this.token !== null; 
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
