import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Article} from '../article/article';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ArticleEditService} from './article-edit.service';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private articleEditService: ArticleEditService) { }
  isCollapsed = false;
  triggerTemplate = null;
  ad: Article;

  ngOnInit() {
    this.getModel()
  }

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  getModel(): void {
    this.route.paramMap.pipe((switchMap((params: ParamMap) => this.articleEditService.editArticleById(params.get('id')))))
      .subscribe((data) => { this.ad = data;
        console.log(this.ad);
        console.log(data);
      });
  }

  onSubmit(Article: Article) {
    this.articleEditService.updateArticle(Article).subscribe((data) => {
      console.log(data);
    },(error) => {
      console.log(error);
    });
  }

}
