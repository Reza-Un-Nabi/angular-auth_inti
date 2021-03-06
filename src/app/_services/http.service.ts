import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    httpBearerHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenStoreService.getToken()

        })
    };


    //Local url
    URL = 'http://localhost:8087/api';

    constructor(private http: HttpClient, private tokenStoreService: TokenStorageService) { }

    getWithToken(url: any): Observable<any> {
        return this.http.get<any>(this.URL + url, this.httpBearerHeader);
    }

    postWithToken(url: any, data: any): Observable<any> {
        //let token = this.tokenStoreService.getToken();
        //console.log(token);
        return this.http.post(this.URL + url, data, this.httpBearerHeader);
    }

    deleteWithToken(url: any): Observable<any> {
        return this.http.delete(this.URL + url, this.httpBearerHeader);
    }

    get(url: any): Observable<any> {
        return this.http.get<any>(this.URL + url);
    }

    post(url: any, data: any): Observable<any> {
        return this.http.post(this.URL + url, data);
    }
}
