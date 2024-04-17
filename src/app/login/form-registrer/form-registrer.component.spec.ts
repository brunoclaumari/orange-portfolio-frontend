import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrerComponent } from './form-registrer.component';

describe('FormRegistrerComponent', () => {
  let component: FormRegistrerComponent;
  let fixture: ComponentFixture<FormRegistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
