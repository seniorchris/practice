import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  http: HttpClient = inject(HttpClient);

  signUp(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<User>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtcL3QbYufKM2Bc__88wNhqdiBybAN4QE',
      data
    );
  }
  logIn(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
   return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtcL3QbYufKM2Bc__88wNhqdiBybAN4QE',
      data
    );
  }
}
