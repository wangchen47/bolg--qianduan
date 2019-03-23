import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ArticleFormComponent} from './article-form/article-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'article-form', component: ArticleFormComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
