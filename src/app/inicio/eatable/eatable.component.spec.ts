import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatableComponent } from './eatable.component';

describe('EatableComponent', () => {
  let component: EatableComponent;
  let fixture: ComponentFixture<EatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
