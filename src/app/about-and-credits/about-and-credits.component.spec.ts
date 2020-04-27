import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAndCreditsComponent } from './about-and-credits.component';

describe('AboutAndCreditsComponent', () => {
  let component: AboutAndCreditsComponent;
  let fixture: ComponentFixture<AboutAndCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAndCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAndCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
