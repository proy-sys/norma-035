import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaGuia3Component } from './encuesta-guia3.component';

describe('EncuestaGuia3Component', () => {
  let component: EncuestaGuia3Component;
  let fixture: ComponentFixture<EncuestaGuia3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaGuia3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaGuia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
