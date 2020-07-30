import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaInfoEditComponent } from './politica-info-edit.component';

describe('PoliticaInfoEditComponent', () => {
  let component: PoliticaInfoEditComponent;
  let fixture: ComponentFixture<PoliticaInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
