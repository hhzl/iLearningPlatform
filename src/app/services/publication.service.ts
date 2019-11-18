import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Publication } from 'src/app/models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  public url: string;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  getByID(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'publication/' + id);
  }

  getAll(): Observable<any> {
    return this._httpClient.get(this.url + 'publication');
  }

  getBySchedule(id: number): Observable<any> {
    return this._httpClient.get(this.url + 'publication/schedule/' + id);
  }

  add(publication: Publication): Observable<any> {
    let json = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.post(this.url + 'publication', json, { headers: headers });
  }

  update(id: number, publication: Publication): Observable<any> {
    let json = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._httpClient.put(this.url + 'publication/' + id, json, { headers: headers });
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.url + 'publication/' + id);
  }
}
