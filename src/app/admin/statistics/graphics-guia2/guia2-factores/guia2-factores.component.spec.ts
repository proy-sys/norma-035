import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guia2FactoresComponent } from './guia2-factores.component';

describe('Guia2FactoresComponent', () => {
  let component: Guia2FactoresComponent;
  let fixture: ComponentFixture<Guia2FactoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guia2FactoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guia2FactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
