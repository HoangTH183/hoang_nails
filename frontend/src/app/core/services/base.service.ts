import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {RequestOptions} from '@angular/common'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private apidataURL = "http://127.0.0.1:8000/api/admin";

  login(account: any) {
    return this.http.post<any>(this.apidataURL + '/login', account, httpOptions)
      .pipe(map(user => {
        return user;
      }));
  }

  constructor(private http:HttpClient) { }
}
