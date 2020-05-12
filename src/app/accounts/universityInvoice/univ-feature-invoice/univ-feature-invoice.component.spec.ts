import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivFeatureInvoiceComponent } from './univ-feature-invoice.component';

describe('UnivFeatureInvoiceComponent', () => {
  let component: UnivFeatureInvoiceComponent;
  let fixture: ComponentFixture<UnivFeatureInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivFeatureInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivFeatureInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
