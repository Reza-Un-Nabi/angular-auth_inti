import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewLeadsComponent } from './lead-view-leads.component';

describe('LeadViewLeadsComponent', () => {
  let component: LeadViewLeadsComponent;
  let fixture: ComponentFixture<LeadViewLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadViewLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadViewLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
