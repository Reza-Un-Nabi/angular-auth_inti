import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationClientComponent } from './application-client.component';

describe('ApplicationClientComponent', () => {
  let component: ApplicationClientComponent;
  let fixture: ComponentFixture<ApplicationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
