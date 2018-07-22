import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSwitchComponent } from './merge-switch.component';

describe('MergeSwitchComponent', () => {
  let component: MergeSwitchComponent;
  let fixture: ComponentFixture<MergeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
