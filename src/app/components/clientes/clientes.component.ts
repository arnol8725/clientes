import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

titulo:string="Consulta de datos";
  listaClientes : Cliente[] = [];

  respuesta =[];

  constructor(private _clienteService:ClienteService) { 

    this.listaClientes=[ new Cliente(1,'Arnol','Peralta','arnol87.peralta@gmail.com','2019-01-08'), 
    new Cliente(1,'Arnol2','Peralta','arnol87.peralta@gmail.com','2019-01-09'),
    new Cliente(1,'Arnol3','Peralta','arnol87.peralta@gmail.com','2019-01-10'),
    new Cliente(1,'Arnol4','Peralta','arnol87.peralta@gmail.com','2019-01-11')


    
    
  ];
  this.consultaClientes();
  }

  consultaClientes(){
  
    this._clienteService.consultaClientes()
    .subscribe(
      cars => {
            this.listaClientes = cars;
            console.log('Cars: ' + cars  );
      },
      err => console.error('Ops: ' + err.message)
    );
  
  }

  ngOnInit() {
  }

}
