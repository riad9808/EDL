import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerercompteComponent } from './gerercompte.component';

describe('GerercompteComponent', () => {
  let component: GerercompteComponent;
  let fixture: ComponentFixture<GerercompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerercompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
