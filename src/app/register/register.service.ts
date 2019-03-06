import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Authorization': 'my-auth-token'
    })
  }

  register(value): Observable<any> {
    const url: string = environment.apiUrl;
    return this.http.post(url + '/register', value, this.httpOptions);
  }
}


