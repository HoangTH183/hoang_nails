import { Salon } from 'models/salon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RequestOptions } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  getAllSalon(): Observable<any> {
    return this.http.get<Salon[]>('/api/admin/salons').pipe(
      tap(
        (receivedApis) =>
          console.log(`receivedApis = ${JSON.stringify(receivedApis)}`),
        catchError((error) => of([]))   
      )
    );
  }
}
