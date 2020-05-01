import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewTrackerComponent } from './lead-view-tracker.component';

describe('LeadViewTrackerComponent', () => {
  let component: LeadViewTrackerComponent;
  let fixture: ComponentFixture<LeadViewTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadViewTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadViewTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
