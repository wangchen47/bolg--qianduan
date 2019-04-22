import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset = utf-8'
    })
  };

  indexArticleById(id): Observable<any> {
    const url = environment.apiUrl + '/articles/' + id + '/edit';
    return this.http.get(url, this.httpOptions);
  }
}
