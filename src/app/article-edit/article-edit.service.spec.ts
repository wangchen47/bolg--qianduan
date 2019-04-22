import { TestBed } from '@angular/core/testing';

import { ArticleEditService } from './article-edit.service';

describe('ArticleEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleEditService = TestBed.get(ArticleEditService);
    expect(service).toBeTruthy();
  });
});
