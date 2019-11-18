import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Schedule } from 'src/app/models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public url: string;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  getByID(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'schedule/' + id);
  }

  getAll(): Observable<any> {
    return this._httpClient.get(this.url + 'schedule');
  }

  getByAssistant(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'schedule/assistant/' + id);
  }

  getByCourse(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'schedule/course/' + id);
  }

  add(schedule: Schedule): Observable<any> {
    let json = JSON.stringify(schedule);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'schedule', json, { headers: headers });
  }

  update(id: number, schedule: Schedule): Observable<any> {
    let json = JSON.stringify(schedule);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.put(this.url + 'schedule/' + id, json, { headers: headers });
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.url + 'schedule/' + id);
  }

};