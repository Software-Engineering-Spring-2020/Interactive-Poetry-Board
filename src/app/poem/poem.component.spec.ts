import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemComponent } from './poem.component';

describe('PoemComponent', () => {
  let component: PoemComponent;
  let fixture: ComponentFixture<PoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
