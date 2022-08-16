import { TestBed } from '@angular/core/testing';
import { EditaProdutosService } from './edita-produtos.service';


describe('EditaProdutosService', () => {
  let service: EditaProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditaProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
