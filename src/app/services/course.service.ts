import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from 'src/app/services/global';
import { Course } from 'src/app/models/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    public url: string;

    constructor(
        private _httpClient: HttpClient
    ) {
        this.url = Global.url;
    }

    getByID(id: number): Observable<any> {
        return this._httpClient.get(this.url + 'course/' + id);
    }

    getAll(): Observable<any> {
        return this._httpClient.get(this.url + 'course');
    }

    add(course: Course): Observable<any> {
        let json = JSON.stringify(course);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.post(this.url + 'course', json, { headers: headers });
    }

    update(id: number, course: Course): Observable<any> {
        let json = JSON.stringify(course);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._httpClient.put(this.url + 'course/' + id, json, { headers: headers });
    }

    delete(id: number): Observable<any> {
        return this._httpClient.delete(this.url + 'course/' + id);
    }
};