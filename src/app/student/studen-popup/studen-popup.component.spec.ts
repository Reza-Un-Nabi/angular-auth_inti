import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenPopupComponent } from './studen-popup.component';

describe('StudenPopupComponent', () => {
  let component: StudenPopupComponent;
  let fixture: ComponentFixture<StudenPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
