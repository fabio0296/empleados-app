import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleados.service';
import { CEmpleado } from '../../models/IEmpleado';

/**
 * Generated class for the Edit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class Edit {
  empleado = new CEmpleado('','');
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: EmpleadoService) {
    let id: String =  this.navParams.get('id');
    this.service.getEmpleado(id).subscribe((empl)=>{ this.empleado = empl });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Edit');
  }
  editarEmpleado(){
    this.service.editarEmpleado(this.empleado).subscribe((empl)=>{ 
      console.log(empl);
      this.navCtrl.pop();
    });
  }
}
