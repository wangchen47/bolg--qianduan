import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {ArticleCreateComponent} from './article-create/article-create.component';
import {ArticleEditComponent} from './article-edit/article-edit.component';
import {IndexArticleComponent} from './index-article/index-article.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'article-form', component: ArticleFormComponent},
  { path: 'articles/create', component: ArticleCreateComponent},
  { path: 'articles/:id/edit', component: ArticleEditComponent},
  { path: 'article-index/:id', component: IndexArticleComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
