import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderComponent } from './comander.component';

describe('ComanderComponent', () => {
  let component: ComanderComponent;
  let fixture: ComponentFixture<ComanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
