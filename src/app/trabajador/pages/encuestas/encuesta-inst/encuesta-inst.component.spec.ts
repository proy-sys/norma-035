import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaInstComponent } from './encuesta-inst.component';

describe('EncuestaInstComponent', () => {
  let component: EncuestaInstComponent;
  let fixture: ComponentFixture<EncuestaInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
