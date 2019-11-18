import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Test } from 'src/app/models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public url: string;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  getByID(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'test/' + id);
  }

  getAll(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'test/schedule/' + id);
  }

  add(test: Test): Observable<any> {
    let json = JSON.stringify(test);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'test', json, { headers: headers });
  }

  update(id: number, test: Test): Observable<any> {
    let json = JSON.stringify(test);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.put(this.url + 'test/' + id, json, { headers: headers });
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.url + 'test/' + id);
  }
}
