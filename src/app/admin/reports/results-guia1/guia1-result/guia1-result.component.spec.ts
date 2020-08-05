import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guia1ResultComponent } from './guia1-result.component';

describe('Guia1ResultComponent', () => {
  let component: Guia1ResultComponent;
  let fixture: ComponentFixture<Guia1ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guia1ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guia1ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
