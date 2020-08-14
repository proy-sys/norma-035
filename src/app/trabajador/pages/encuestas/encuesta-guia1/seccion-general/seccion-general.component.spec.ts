import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGeneralComponent } from './seccion-general.component';

describe('SeccionGeneralComponent', () => {
  let component: SeccionGeneralComponent;
  let fixture: ComponentFixture<SeccionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
