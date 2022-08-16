import { TestBed } from '@angular/core/testing';

import { ListaProdutosNomeService } from './lista-produtos-nome.service';

describe('ListaProdutosNomeService', () => {
  let service: ListaProdutosNomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdutosNomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
