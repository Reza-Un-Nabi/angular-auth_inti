import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivaddInvoiceComponent } from './univadd-invoice.component';

describe('UnivaddInvoiceComponent', () => {
  let component: UnivaddInvoiceComponent;
  let fixture: ComponentFixture<UnivaddInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivaddInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivaddInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
