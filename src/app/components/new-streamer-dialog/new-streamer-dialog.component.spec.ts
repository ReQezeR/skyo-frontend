import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStreamerDialogComponent } from './new-streamer-dialog.component';

describe('NewStreamerDialogComponent', () => {
  let component: NewStreamerDialogComponent;
  let fixture: ComponentFixture<NewStreamerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStreamerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStreamerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
