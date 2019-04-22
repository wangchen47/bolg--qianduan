import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  sortName = null;
  sortValue = null;
  articles: Array<Article>;
  allChecked = false;
  disabled = false;
  indeterminate = false;
  displayData = [];
  pageSize: number = 10;
  pageIndex: number = 1;
  total: number;
  selectedValue: number = 1;
  idAll = [];
  idg = [];
  techCategory_trry = [{tech_category_id: '1', name: 'PHP'}, {tech_category_id: '2', name: 'Angular'} , {tech_category_id: '3', name: 'Node.js'}, {tech_category_id: '4', name: 'Laravel'}, {tech_category_id: '5', name: 'ThinkPHP'}];



  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  getArticles(): void {
    this.articleService.getArticles(this.pageSize, this.pageIndex, '').subscribe(
      (data) => {
        console.log(data);
        for (const item of data.data) {
          item.checked = false;
          item.disabled = false;
        }
        this.articles = data.data;
        this.total = data.total;
        console.log(this.articles);
      }
    );
  }

  updateArticleById(id): void {
    this.router.navigateByUrl('/articles/' + id + '/edit');
  }

  currentPageDataChange($event: Array<object>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    if (this.articles) {
    this.idAll = this.articles.filter(value => value.checked === true);
    }
    console.log(this.idAll);
    const result = [];
    for (let i = 0; i < this.idAll.length; i++) {
      result.push(this.idAll[i].id);
    }
    this.idg = result;
    console.log(this.idg);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayData = this.articles.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.articles;
    }
  }

  newArticle(): void {
    this.router.navigateByUrl('/articles/create');

  }

  deleteArticleById(): void {
    const id = this.idg;
    console.log(id);
    this.articleService.deleteArticles(id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  getFiliter(value: number): void {
    this.articleService.getFilterIndex(value, this.pageSize, this.pageIndex).subscribe(
      (data) => {
        console.log(data);
        this.total = data.total;
        this.articles = data.data;

      }
    );
  }

  getSurch(filter: string): void {
    this.articleService.getArticles(this.pageSize, this.pageIndex, filter).subscribe((data) => {
      console.log(data);
      this.articles = data.data;
      this.total = data.total;
    },
      (error) => {
        console.log(error);
      }
      );
  }

  getIndex(id): void {
    this.router.navigateByUrl('/article-index/' + id);
  }

}
