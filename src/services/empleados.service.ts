import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/IEmpleado';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const HEADERS = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers: HEADERS });

@Injectable()
export class EmpleadoService {
  private URL = 'https://empleados-app.herokuapp.com/api';
  constructor(private http: Http) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get(`${this.URL}/empleado`)
      .map(this.extractData)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  guardarNuevo(empl: Empleado): Observable<Empleado> {
    return this.http.post(`${this.URL}/empleado`, empl, OPTIONS)
      .map(this.extractData);
  }
  eliminarEmpleado(empl: Empleado): Observable<Empleado> {
    return this.http.delete(`${this.URL}/empleado/${empl._id}`)
      .map(this.extractData);
  }
  getEmpleado(id: String): Observable<Empleado> {
    return this.http.get(`${this.URL}/empleado/${id}`)
      .map(this.extractData);
  }
  editarEmpleado(empl: Empleado): Observable<Empleado> {
    return this.http.put(`${this.URL}/empleado/${empl._id}`, empl, OPTIONS)
      .map(this.extractData);
  }
}