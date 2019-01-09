import {Routes,RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';


export const APP_ROUTER: Routes = [
    { path :'cliente', component: ClientesComponent},    
    { path :'formulario', component: FormularioClienteComponent},    
    { path :'', pathMatch: 'full', redirectTo: 'cliente'},
    { path :'**', pathMatch: 'full', redirectTo: 'cliente'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);