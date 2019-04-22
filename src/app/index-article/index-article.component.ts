import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {IndexService} from './index.service';
import {switchMap} from 'rxjs/internal/operators';
import {Article} from '../article/article';

@Component({
  selector: 'app-index-article',
  templateUrl: './index-article.component.html',
  styleUrls: ['./index-article.component.css']
})
export class IndexArticleComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  articles: Article;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(private route: ActivatedRoute, private router: Router, private Service: IndexService) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.Service.indexArticleById(params.get('id')))).subscribe((data) => {
      console.log(data);
      this.articles = data;
      console.log(this.articles);
    },
      (error) => {
      console.log(error);
    }
      );
  }

}
