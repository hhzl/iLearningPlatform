import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Question } from 'src/app/models/question';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByID(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'question/' + id);
    }

    getAll(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'question/schedule/' + id);
    }

    add(question: Question): Observable<any> {
        let json = JSON.stringify(question);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'question', json, { headers: headers });
    }

    update(id: number, question: Question): Observable<any> {
        let json = JSON.stringify(question);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'question/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'question/' + id);
    }
}
