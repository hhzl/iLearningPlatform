import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;

  constructor(
    private _router: Router,
    private _httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  getUser(): User {
    let user = JSON.parse(localStorage.getItem('user'));
    user = user[0];
    return user;
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getByID(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'user/' + id);
  }

  getAll(): Observable<any> {
    return this._httpClient.get(this.url + 'user');
  }

  getAssistant(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post(this.url + 'user/assistant', { headers: headers });
  }

  getBySchedule(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'user/schedule/' + id);
  }

  addUser(user: User): Observable<any> {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'user', json, { headers: headers });
  }

  updateUser(id: number, user: User): Observable<any> {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.put(this.url + 'user/' + id, json, { headers: headers });
  }

  deleteUser(id: number): Observable<any> {
    return this._httpClient.delete(this.url + 'user/' + id);
  }

  saveStorage(res) {
    const code = res.code;
    if (code === '200') {
      console.log("User login successfully");
      localStorage.setItem('user', JSON.stringify(res.data));

      if (this.verifyUser()) {
        this._router.navigate(['/home']);
      }

    } else {
      return false;
    }
  }

  authenticate(email: string, password: string): Observable<any> {
    const user = {
      email: email,
      password: password
    };
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'user/login', json, { headers: headers });
  }

  verifyUser(): boolean {
    if (localStorage.getItem('user')) {
      let user: User = this.getUser();
      if (user.isStudent || user.isAssistant) {
        return true;
      }
    }
    return false;
  }
}
