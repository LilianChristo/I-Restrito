import { TestBed } from '@angular/core/testing';

import { AdicionarReceitasService } from './adicionar-receitas.service';

describe('AdicionarReceitasService', () => {
  let service: AdicionarReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarReceitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
