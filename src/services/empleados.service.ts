import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/IEmpleado';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class EmpleadoService{
  private URL = 'https://empleados-app.herokuapp.com/api';
  constructor(private http: Http){}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get(`${this.URL}/empleado`)
    .map(this.extractData);
  }
  private extractData(res: Response ){
    console.log(res.json());
    
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any){

  }



}