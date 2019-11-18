import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Homework } from 'src/app/models/homework';

@Injectable({
    providedIn: 'root'
})
export class HomeworkService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByID(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'homework/' + id);
    }

    getAll(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'homework/schedule/' + id);
    }

    add(homework: Homework): Observable<any> {
        let json = JSON.stringify(homework);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'homework', json, { headers: headers });
    }

    update(id: number, homework: Homework): Observable<any> {
        let json = JSON.stringify(homework);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'homework/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'homework/' + id);
    }
}