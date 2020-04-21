import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesAlertsComponent } from './clues-alerts.component';

describe('CluesAlertsComponent', () => {
  let component: CluesAlertsComponent;
  let fixture: ComponentFixture<CluesAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
