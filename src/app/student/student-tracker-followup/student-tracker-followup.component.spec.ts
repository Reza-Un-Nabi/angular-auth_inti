import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrackerFollowupComponent } from './student-tracker-followup.component';

describe('StudentTrackerFollowupComponent', () => {
  let component: StudentTrackerFollowupComponent;
  let fixture: ComponentFixture<StudentTrackerFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTrackerFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTrackerFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
