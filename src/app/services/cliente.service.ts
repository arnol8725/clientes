import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../components/clientes/cliente';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlServices:string = "http://10.51.119.112:9098/rest";

  constructor(private http: HttpClient) { }

  consultaClientes() : Observable<Cliente[]> {

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials': "true",
          'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
          'Access-Control-Allow-Origin': '*'
        })
      };
        return this.http.get<Cliente[]>(this.urlServices+"/contactosClientes",httpOptions);
  }


  save(cliente:Cliente) : Observable<Cliente[]> {

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials': "true",
          'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
          'Access-Control-Allow-Origin': '*'
        })
      };



        return this.http.post<Cliente[]>(this.urlServices+"/saveClientes",cliente,httpOptions);
  }
}
