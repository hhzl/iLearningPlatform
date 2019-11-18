import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Ticket } from 'src/app/models/ticket';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByID(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'ticket/' + id);
    }

    getAll(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'ticket/schedule/' + id);
    }

    add(ticket: Ticket): Observable<any> {
        let json = JSON.stringify(ticket);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'ticket', json, { headers: headers });
    }

    update(id: number, ticket: Ticket): Observable<any> {
        let json = JSON.stringify(ticket);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'ticket/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'ticket/' + id);
    }
}