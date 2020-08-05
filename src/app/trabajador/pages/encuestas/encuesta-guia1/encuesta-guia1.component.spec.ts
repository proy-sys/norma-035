import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaGuia1Component } from './encuesta-guia1.component';

describe('EncuestaGuia1Component', () => {
  let component: EncuestaGuia1Component;
  let fixture: ComponentFixture<EncuestaGuia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaGuia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaGuia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
