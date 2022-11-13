import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ModificarEmpleadosComponent } from './modificar-empleados/modificar-empleados.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RolesComponent } from './roles/roles.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { ModificarEmpleadosModificarComponent } from './modificar-empleados-modificar/modificar-empleados-modificar.component';
import { CrearUsuarioNewComponent } from './crear-usuario-new/crear-usuario-new.component';
import { CrearUsuarioModificarComponent } from './crear-usuario-modificar/crear-usuario-modificar.component';
import { ParametrosModificarComponent } from './parametros-modificar/parametros-modificar.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    InicioAdminComponent,
    ModificarEmpleadosComponent,
    OrganizacionesComponent,
    ParametrosComponent,
    RegistrarEmpleadoComponent,
    RolesComponent,
    SiderbarComponent,
    ModificarEmpleadosModificarComponent,
    CrearUsuarioNewComponent,
    CrearUsuarioModificarComponent,
    ParametrosModificarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
