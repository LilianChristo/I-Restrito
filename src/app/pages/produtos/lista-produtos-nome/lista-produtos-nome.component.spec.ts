import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosNomeComponent } from './lista-produtos-nome.component';

describe('ListaProdutosNomeComponent', () => {
  let component: ListaProdutosNomeComponent;
  let fixture: ComponentFixture<ListaProdutosNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutosNomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdutosNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
