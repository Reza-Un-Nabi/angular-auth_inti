import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrackerComponent } from './student-tracker.component';

describe('StudentTrackerComponent', () => {
  let component: StudentTrackerComponent;
  let fixture: ComponentFixture<StudentTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
