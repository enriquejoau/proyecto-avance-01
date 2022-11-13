import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioModificarComponent } from './crear-usuario-modificar.component';

describe('CrearUsuarioModificarComponent', () => {
  let component: CrearUsuarioModificarComponent;
  let fixture: ComponentFixture<CrearUsuarioModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
