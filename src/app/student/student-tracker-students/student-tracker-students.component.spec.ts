import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrackerStudentsComponent } from './student-tracker-students.component';

describe('StudentTrackerStudentsComponent', () => {
  let component: StudentTrackerStudentsComponent;
  let fixture: ComponentFixture<StudentTrackerStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTrackerStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTrackerStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
