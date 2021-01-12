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

  private apidataURL = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  login(account: any) {
    return this.http.post<any>(this.apidataURL + '/api/admin/login', account, httpOptions)
        .pipe(map(account => {
            return account;
        }));
}


//   getAllAccount(): Observable<any> {
//     // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
//     // let options = new RequestOptions({ headers: headers });
//     return this.http.get<Account[]>(this.apidataURL + '/GetAll').pipe(
//       tap(
//         (receivedApis) =>
//           console.log(`receivedApis = ${JSON.stringify(receivedApis)}`),
//         catchError((error) => of([]))
//       )
//     );
//   }

//   getAccountFromId(id: number): Observable<any> {
//     const url = `${this.apidataURL + '/GetById'}?id=${id}`
//     return this.http.get<Account>(url).pipe(
//       tap(
//         (selectedApi) =>
//           console.log(`selectedApi = ${JSON.stringify(selectedApi)}`)
//       ),
//       catchError((error) => of(new Account()))
//     )
//   }

//   createAccount(account: Account): Observable<Account> {
//     return this.http.post<Account>(this.apidataURL + '/Add', account, httpOptions).pipe(
//       tap((createAccount: Account) =>
//         console.log(`createAccount =${JSON.stringify(createAccount)}`)
//       ),
//       catchError((error) => of(new Account()))
//     );
//   }

//   updateAccount(accountData: Account): Observable<any> {
//     return this.http.put(`${this.apidataURL + '/Update'}?id=${accountData.id}`, accountData, httpOptions).pipe(
//       tap((updateAccount) =>
//         console.log(`updateAccount = ${JSON.stringify(updateAccount)}`)
//       ),
//       catchError((error) => of(new Account()))
//     )
//   }

//   deleteApi(accountId: string): Observable<any> {
//     const url = `${this.apidataURL + '/Delete'}?id=${accountId}`;
//     return this.http.delete<Account>(url, httpOptions).pipe(
//       tap((_) =>
//         console.log(`delete api with id = ${JSON.stringify(accountId)}`)
//       ),
//       catchError((error) => of(null))
//     )
//   }
}
