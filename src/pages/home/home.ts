import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleados.service';
import { Empleado } from '../../models/IEmpleado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  empleados: Empleado[];
  constructor(public navCtrl: NavController, public service:EmpleadoService) {

  }
  ngOnInit(){
    this.getEmpleados();
  }
  getEmpleados(){
    this.service.getEmpleados()
    .subscribe((empleados)=>{
      console.log('estos son los empleados',empleados);
      
      this.empleados = empleados;
    });
  }
}
