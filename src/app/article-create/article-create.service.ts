import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../article/article';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleCreateService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset = utf-8'
    })
  };

  createArticle(value: Article): Observable<any> {
    const url = environment.apiUrl + '/articles/';
    return this.http.post(url, value, this.httpOptions);
  }
}







