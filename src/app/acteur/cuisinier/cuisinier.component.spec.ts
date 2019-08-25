import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinierComponent } from './cuisinier.component';

describe('CuisinierComponent', () => {
  let component: CuisinierComponent;
  let fixture: ComponentFixture<CuisinierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisinierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
