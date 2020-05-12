import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivpendingInvoiceComponent } from './univpending-invoice.component';

describe('UnivpendingInvoiceComponent', () => {
  let component: UnivpendingInvoiceComponent;
  let fixture: ComponentFixture<UnivpendingInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivpendingInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivpendingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
