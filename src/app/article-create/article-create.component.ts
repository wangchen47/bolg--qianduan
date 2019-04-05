import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Article} from '../article/article';
import {ArticleCreateService} from './article-create.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  constructor(private articleCreateService: ArticleCreateService) { }

  ngOnInit() {
  }

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  onSubmit(value: Article): void {
    this.articleCreateService.createArticle(value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {}
    );
  }

}
