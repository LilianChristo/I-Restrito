import { TestBed } from '@angular/core/testing';
import { AdicionarProdutoService } from './adicionar-produtos.service';


describe('AdicionarProdutoService', () => {
  let service: AdicionarProdutoService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({});
      service = TestBed.inject(AdicionarProdutoService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
