import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEmpleadosModificarComponent } from './modificar-empleados-modificar.component';

describe('ModificarEmpleadosModificarComponent', () => {
  let component: ModificarEmpleadosModificarComponent;
  let fixture: ComponentFixture<ModificarEmpleadosModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEmpleadosModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarEmpleadosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
