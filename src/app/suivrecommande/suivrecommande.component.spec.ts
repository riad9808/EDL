import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivrecommandeComponent } from './suivrecommande.component';

describe('SuivrecommandeComponent', () => {
  let component: SuivrecommandeComponent;
  let fixture: ComponentFixture<SuivrecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivrecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivrecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
