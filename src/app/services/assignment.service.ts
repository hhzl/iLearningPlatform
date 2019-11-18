import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Assignment } from 'src/app/models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  public url: string;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  getByID(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'assignment/' + id);
  }

  getAll(): Observable<any> {
    return this._httpClient.get(this.url + 'assignment');
  }

  getByUser(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'assignment/user/' + id);
  }

  add(assignment: Assignment): Observable<any> {
    let json = JSON.stringify(assignment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'assignment', json, { headers: headers });
  }

  update(id: number, assignment: Assignment): Observable<any> {
    let json = JSON.stringify(assignment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.put(this.url + 'assignment/' + id, json, { headers: headers });
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.url + 'assignment/' + id);
  }
}
