import { TestBed } from '@angular/core/testing';

import { ArticleCreateService } from './article-create.service';

describe('ArticleCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleCreateService = TestBed.get(ArticleCreateService);
    expect(service).toBeTruthy();
  });
});
