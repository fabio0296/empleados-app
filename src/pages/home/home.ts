import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleados.service';
import { Empleado } from '../../models/IEmpleado';
import { NewEmployee } from '../new-employee/new-employee'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  empleados: Empleado[];
  constructor(public navCtrl: NavController, public service:EmpleadoService, public actionSheetCtrl: ActionSheetController) {

  }
  ngOnInit(){
    // this.getEmpleados();
  }
   ionViewWillEnter() {
     this.getEmpleados();
   }
  getEmpleados(){
    this.service.getEmpleados()
    .subscribe((empleados)=>{
      console.log('estos son los empleados',empleados);
      
      this.empleados = empleados;
    });
  }
  goToNewEmployee(){
    this.navCtrl.push(NewEmployee);
  }
  showOptions(empl){
    let actionPreset = this.actionSheetCtrl.create({
      title: 'Empleado',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: ()=>{ this.service.eliminarEmpleado(empl).subscribe(()=>{ this.getEmpleados(); });
          }
        },
        {
          text: 'Editar',
          handler: ()=>{ console.log('Editando'); }
        },
        {
          text: 'Cancelar',
          role: 'cancel',

        }
      ]
    });
    actionPreset.present();
  }
}
