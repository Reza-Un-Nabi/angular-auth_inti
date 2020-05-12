import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInvoiceComponent } from './university-invoice.component';

describe('UniversityInvoiceComponent', () => {
  let component: UniversityInvoiceComponent;
  let fixture: ComponentFixture<UniversityInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
