import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisaComponent } from './view-visa.component';

describe('ViewVisaComponent', () => {
  let component: ViewVisaComponent;
  let fixture: ComponentFixture<ViewVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
