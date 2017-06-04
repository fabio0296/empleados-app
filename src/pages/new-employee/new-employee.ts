import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CEmpleado } from '../../models/IEmpleado';
import { EmpleadoService } from '../../services/empleados.service';

/**
 * Generated class for the NewEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-employee',
  templateUrl: 'new-employee.html',
})
export class NewEmployee {
  empl = new CEmpleado('','');

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:EmpleadoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEmployee');
    this.empl = new CEmpleado('', '');
  }
  guardarEmpleado(){
    this.service.guardarNuevo(this.empl)
    .subscribe((nuevo)=>{
      console.log('se guardo :D', nuevo);
      this.navCtrl.pop();
    })
  }
}
