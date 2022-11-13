import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioNewComponent } from './crear-usuario-new.component';

describe('CrearUsuarioNewComponent', () => {
  let component: CrearUsuarioNewComponent;
  let fixture: ComponentFixture<CrearUsuarioNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
