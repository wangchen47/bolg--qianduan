import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Authorization': 'my-auth-token'
    })
  };

  loginPost(value): Observable<any> {
    const url: string = environment.apiUrl;
    return this.http.post(url + '/login', value, this.httpOptions);
  }
}
