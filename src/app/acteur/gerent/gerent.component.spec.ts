import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerentComponent } from './gerent.component';

describe('GerentComponent', () => {
  let component: GerentComponent;
  let fixture: ComponentFixture<GerentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
