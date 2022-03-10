import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamersTableComponent } from './streamers-table.component';

describe('StreamersTableComponent', () => {
  let component: StreamersTableComponent;
  let fixture: ComponentFixture<StreamersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
