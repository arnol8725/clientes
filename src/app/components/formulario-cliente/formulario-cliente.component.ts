import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { Cliente } from '../clientes/cliente';
import { DatePipe } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {
/*Variable agregar los componentes para el form*/
  formas:FormGroup;
  cliente : Cliente;
  listaClientes : Cliente[] = [];
  constructor(private _clienteService:ClienteService) { 
    let d = new Date();

    var datePipe = new DatePipe('en-US');  
    var fecha = datePipe.transform(d, 'yyyy-MM-dd');

    console.log(fecha);

    this.cliente= new Cliente(0,'','','',fecha.toString());

    
            
    this.formas = new FormGroup({
        'id': new FormControl('0'),
        'nombre': new FormControl('',[Validators.minLength(3),Validators.required]),
        'apellido': new FormControl('',[Validators.minLength(3),Validators.required]),
        'email': new FormControl('',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),Validators.required]),
        'createAt': new FormControl('',[Validators.maxLength(20),Validators.required])
    });

    this.formas.setValue(this.cliente);

    this.formas.valueChanges.subscribe( data => {
      console.log(data);

      this.cliente=data;
  });

    console.log(this.formas);

  }

  ngOnInit() {


  }

  guardarCambio(){
  console.log(this.cliente) ;


      this._clienteService.save(this.cliente).subscribe(
        cars => {
              this.listaClientes = cars;
              console.log('Cars: ' + cars  );
        },
        err => console.error('Ops: ' + err.message)
      );
  
  }


}
