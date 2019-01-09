import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectvasComponent } from './components/directvas/directvas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { APP_ROUTING} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DirectvasComponent,
    ClientesComponent,
    FormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
