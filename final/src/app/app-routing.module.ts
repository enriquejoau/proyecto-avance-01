import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './Pages/admin/crear-usuario/crear-usuario.component';
import { InicioAdminComponent } from './Pages/admin/inicio-admin/inicio-admin.component';
import { ModificarEmpleadosComponent } from './Pages/admin/modificar-empleados/modificar-empleados.component';
import { OrganizacionesComponent } from './Pages/admin/organizaciones/organizaciones.component';
import { PagesRoutingModule } from './Pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
