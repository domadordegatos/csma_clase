import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioIfComponent } from './ejercicio-if.component';

describe('EjercicioIfComponent', () => {
  let component: EjercicioIfComponent;
  let fixture: ComponentFixture<EjercicioIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
