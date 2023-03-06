import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMatFormCreationComponent } from './dynamic-mat-form-creation.component';

describe('DynamicMatFormCreationComponent', () => {
  let component: DynamicMatFormCreationComponent;
  let fixture: ComponentFixture<DynamicMatFormCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicMatFormCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMatFormCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
