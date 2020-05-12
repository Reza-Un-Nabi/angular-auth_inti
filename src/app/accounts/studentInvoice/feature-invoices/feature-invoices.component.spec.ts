import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureInvoicesComponent } from './feature-invoices.component';

describe('FeatureInvoicesComponent', () => {
  let component: FeatureInvoicesComponent;
  let fixture: ComponentFixture<FeatureInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
