import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Article} from '../article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleEditService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset = utf-8'
    })
  };

  editArticleById(id): Observable<any> {
    const url = environment.apiUrl + '/articles/' + id + '/edit';
    return this.http.get(url, this.httpOptions);
  }

  updateArticle(Article: Article): Observable<any> {
    const url = environment.apiUrl + '/articles/' + Article.id;
    return this.http.put(url, Article, this.httpOptions);
  }
}
