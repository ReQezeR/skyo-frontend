import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCsvDialogComponent } from './upload-csv-dialog.component';

describe('UploadCsvDialogComponent', () => {
  let component: UploadCsvDialogComponent;
  let fixture: ComponentFixture<UploadCsvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCsvDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCsvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
