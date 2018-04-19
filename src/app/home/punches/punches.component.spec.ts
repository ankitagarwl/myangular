import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchesComponent } from './punches.component';

describe('PunchesComponent', () => {
  let component: PunchesComponent;
  let fixture: ComponentFixture<PunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
