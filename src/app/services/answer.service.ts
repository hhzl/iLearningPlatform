import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Answer } from 'src/app/models/answer';

@Injectable({
    providedIn: 'root'
})
export class AnswerService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByID(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'answer/' + id);
    }

    getAll(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'answer/schedule/' + id);
    }

    add(answer: Answer): Observable<any> {
        let json = JSON.stringify(answer);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'answer', json, { headers: headers });
    }

    update(id: number, answer: Answer): Observable<any> {
        let json = JSON.stringify(answer);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'answer/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'answer/' + id);
    }
}
