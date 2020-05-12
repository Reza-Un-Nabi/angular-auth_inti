import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivpaidInvoiceComponent } from './univpaid-invoice.component';

describe('UnivpaidInvoiceComponent', () => {
  let component: UnivpaidInvoiceComponent;
  let fixture: ComponentFixture<UnivpaidInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivpaidInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivpaidInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
