import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosModificarComponent } from './parametros-modificar.component';

describe('ParametrosModificarComponent', () => {
  let component: ParametrosModificarComponent;
  let fixture: ComponentFixture<ParametrosModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
