import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {RequestOptions} from '@angular/common'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../../../models/account';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AccountServices {
  static token: string | string[];
  static access_token: string | string[];


  constructor(private http: HttpClient) { }

  login(account: any) {
    return this.http.post<any>('/api/admin/login', account, httpOptions)
      .pipe(map(account => {
          return account;
      }));
  }
  getAllAccount(): Observable<any> {
    return this.http.get<Account[]>('/api/admin/login').pipe(
      tap(
        (data) =>
          console.log(`data = ${JSON.stringify(data)}`),
        catchError((error) => of([]))   
      )
    );
  }
}
