import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaGuia2Component } from './encuesta-guia2.component';

describe('EncuestaGuia2Component', () => {
  let component: EncuestaGuia2Component;
  let fixture: ComponentFixture<EncuestaGuia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaGuia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaGuia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
