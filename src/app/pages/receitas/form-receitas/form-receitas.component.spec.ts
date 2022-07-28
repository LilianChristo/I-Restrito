import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReceitasComponent } from './form-receitas.component';

describe('FormReceitasComponent', () => {
  let component: FormReceitasComponent;
  let fixture: ComponentFixture<FormReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
