import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStreamerDialogComponent } from './filter-streamer-dialog.component';

describe('FilterStreamerDialogComponent', () => {
  let component: FilterStreamerDialogComponent;
  let fixture: ComponentFixture<FilterStreamerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStreamerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStreamerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
