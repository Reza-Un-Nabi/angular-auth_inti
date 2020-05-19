import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewImportComponent } from './lead-view-import.component';

describe('LeadViewImportComponent', () => {
  let component: LeadViewImportComponent;
  let fixture: ComponentFixture<LeadViewImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadViewImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadViewImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
