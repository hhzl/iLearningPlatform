import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Commentary } from 'src/app/models/commentary';

@Injectable({
    providedIn: 'root'
})
export class CommentaryService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByPublication(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'commentary/' + id);
    }

    getAll(): Observable<any> {
        return this._httpClient.get(this.url + 'commentary');
    }

    add(commentary: Commentary): Observable<any> {
        let json = JSON.stringify(commentary);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'commentary', json, { headers: headers });
    }

    update(id: number, commentary: Commentary): Observable<any> {
        let json = JSON.stringify(commentary);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'commentary/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'commentary/' + id);
    }
}
