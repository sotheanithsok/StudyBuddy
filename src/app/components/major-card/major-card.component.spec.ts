import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorCardComponent } from './major-card.component';

describe('MajorCardComponent', () => {
  let component: MajorCardComponent;
  let fixture: ComponentFixture<MajorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
