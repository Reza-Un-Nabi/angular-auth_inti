import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadUniversityComponent } from './bulk-upload-university.component';

describe('BulkUploadUniversityComponent', () => {
  let component: BulkUploadUniversityComponent;
  let fixture: ComponentFixture<BulkUploadUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkUploadUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
