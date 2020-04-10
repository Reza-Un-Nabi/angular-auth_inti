import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaManagerComponent } from './visa-manager.component';

describe('VisaManagerComponent', () => {
  let component: VisaManagerComponent;
  let fixture: ComponentFixture<VisaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
