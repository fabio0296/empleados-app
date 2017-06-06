import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleados.service';
import { CEmpleado } from '../../models/IEmpleado';

/**
 * Generated class for the Details page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {
  empleado = new CEmpleado('','');
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: EmpleadoService) {
    let id = this.navParams.get('id');
    this.service.getEmpleado(id).subscribe((empl)=>{ this.empleado = empl; });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }

}
