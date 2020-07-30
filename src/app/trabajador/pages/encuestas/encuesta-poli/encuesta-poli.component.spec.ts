import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPoliComponent } from './encuesta-poli.component';

describe('EncuestaPoliComponent', () => {
  let component: EncuestaPoliComponent;
  let fixture: ComponentFixture<EncuestaPoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaPoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaPoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
