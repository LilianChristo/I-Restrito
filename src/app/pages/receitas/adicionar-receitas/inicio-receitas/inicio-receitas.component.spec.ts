import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioReceitasComponent } from './inicio-receitas.component';

describe('InicioReceitasComponent', () => {
  let component: InicioReceitasComponent;
  let fixture: ComponentFixture<InicioReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
