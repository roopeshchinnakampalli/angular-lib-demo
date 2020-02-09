import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSpinnerSectionComponent } from './comp-spinner-section.component';

describe('CompspinnersectionComponent', () => {
  let component: CompSpinnerSectionComponent;
  let fixture: ComponentFixture<CompSpinnerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompSpinnerSectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSpinnerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
