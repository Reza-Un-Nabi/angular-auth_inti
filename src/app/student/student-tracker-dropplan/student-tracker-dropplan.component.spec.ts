import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrackerDropplanComponent } from './student-tracker-dropplan.component';

describe('StudentTrackerDropplanComponent', () => {
  let component: StudentTrackerDropplanComponent;
  let fixture: ComponentFixture<StudentTrackerDropplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTrackerDropplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTrackerDropplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
