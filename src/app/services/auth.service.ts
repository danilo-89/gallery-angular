import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, username }: any): Observable<any> {
    if (email.trim() !== '' && username.trim() !== '') {
      this.setToken('ulogovanSiToken');
      return of({ name: email.trim(), email: username.trim() });
    }
    return throwError(new Error('Upišite bilo šta u oba polja'));
  }
}