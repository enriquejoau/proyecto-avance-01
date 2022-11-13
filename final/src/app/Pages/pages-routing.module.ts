import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearUsuarioModificarComponent } from "./admin/crear-usuario-modificar/crear-usuario-modificar.component";
import { CrearUsuarioNewComponent } from "./admin/crear-usuario-new/crear-usuario-new.component";
import { CrearUsuarioComponent } from "./admin/crear-usuario/crear-usuario.component";
import { InicioAdminComponent } from "./admin/inicio-admin/inicio-admin.component";
import { ModificarEmpleadosModificarComponent } from "./admin/modificar-empleados-modificar/modificar-empleados-modificar.component";
import { ModificarEmpleadosComponent } from "./admin/modificar-empleados/modificar-empleados.component";
import { OrganizacionesComponent } from "./admin/organizaciones/organizaciones.component";
import { ParametrosModificarComponent } from "./admin/parametros-modificar/parametros-modificar.component";
import { ParametrosComponent } from "./admin/parametros/parametros.component";
import { RegistrarEmpleadoComponent } from "./admin/registrar-empleado/registrar-empleado.component";
import { RolesComponent } from "./admin/roles/roles.component";
import { SiderbarComponent } from "./admin/siderbar/siderbar.component";


const routes: Routes =[
    {path:'inicio-admin', component:InicioAdminComponent},
    {path:'modificar-empleados',component:ModificarEmpleadosComponent},
    {path:'crear-usuario', component:CrearUsuarioComponent},
    {path:'crear-usuario/crear-usuario-new', component:CrearUsuarioNewComponent},
    {path:'crear-usuario/crear-usuario-modificar', component:CrearUsuarioModificarComponent},
    {path:'organizaciones', component:OrganizacionesComponent},
    {path:'parametros', component:ParametrosComponent},
    {path:'parametros/parametros-modificar', component:ParametrosModificarComponent},
    {path:'registrar-empleado', component:RegistrarEmpleadoComponent},
    {path:'modificar-empleados/modificar-empleados-modificar', component:ModificarEmpleadosModificarComponent},
    {path:'roles', component:RolesComponent},
    {path:'sidebar', component:SiderbarComponent},


];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}