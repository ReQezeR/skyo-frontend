import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStreamerDialogComponent } from './edit-streamer-dialog.component';

describe('EditStreamerDialogComponent', () => {
  let component: EditStreamerDialogComponent;
  let fixture: ComponentFixture<EditStreamerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStreamerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStreamerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
