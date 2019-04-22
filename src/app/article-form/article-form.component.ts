import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';
import {Article} from '../article/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  validateForm: FormGroup;
  @Output() onSubmitValue = new EventEmitter();
  @Input() model: Article;

  techCategory_trry = [{tech_category_id: '1', name: 'PHP'}, {tech_category_id: '2', name: 'Angular'} , {tech_category_id: '3', name: 'Node.js'}, {tech_category_id: '4', name: 'Laravel'}, {tech_category_id: '5', name: 'ThinkPHP'}];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [ ''],
      title: [ '', [ Validators.required ] ],
      intro   : [ '', [ Validators.required ] ],
      content: [ '', [ Validators.required ] ],
      techCategory : [ '', [ Validators.required ] ],
      label : [ '', [ Validators.required ] ],
      createdUser : [ '', [ Validators.required ] ],
    });
      if (this.model) {
        this.validateForm.patchValue({
          id: this.model.id,
          title: this.model.title,
          intro: this.model.intro,
          content: this.model.content,
          techCategory: this.model.tech_category_id,
          label: this.model.label.name,
          createdUser: this.model.user.name,
        });
      }

  }

  submitForm = ($event, value: Article) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    this.onSubmitValue.emit(value);
    console.log(value);
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
  }
}
