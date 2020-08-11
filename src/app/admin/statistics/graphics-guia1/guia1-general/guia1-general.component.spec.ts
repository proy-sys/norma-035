import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guia1GeneralComponent } from './guia1-general.component';

describe('Guia1GeneralComponent', () => {
  let component: Guia1GeneralComponent;
  let fixture: ComponentFixture<Guia1GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guia1GeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guia1GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
