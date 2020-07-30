import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasAddComponent } from './sugerencias-add.component';

describe('SugerenciasAddComponent', () => {
  let component: SugerenciasAddComponent;
  let fixture: ComponentFixture<SugerenciasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
