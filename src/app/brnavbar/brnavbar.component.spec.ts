import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnavbarComponent } from './brnavbar.component';

describe('BrnavbarComponent', () => {
  let component: BrnavbarComponent;
  let fixture: ComponentFixture<BrnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
