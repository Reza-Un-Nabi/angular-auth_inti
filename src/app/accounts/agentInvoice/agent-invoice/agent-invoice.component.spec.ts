import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInvoiceComponent } from './agent-invoice.component';

describe('AgentInvoiceComponent', () => {
  let component: AgentInvoiceComponent;
  let fixture: ComponentFixture<AgentInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
