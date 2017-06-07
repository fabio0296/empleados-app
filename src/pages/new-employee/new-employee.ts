import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CEmpleado } from '../../models/IEmpleado';
import { EmpleadoService } from '../../services/empleados.service';
import { GeolocationService } from '../../services/geolocalizacion.service';

/**
 * Generated class for the NewEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 * 
 */

@IonicPage()
@Component({
  selector: 'page-new-employee',
  templateUrl: 'new-employee.html',
})
export class NewEmployee {
  empl = new CEmpleado('', '');
  gelocate: Boolean = false;
  debeEnviar: Boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: EmpleadoService,
    public camera: Camera, public dialog: Dialogs, public geo: GeolocationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEmployee');
    this.empl = new CEmpleado('', '');
  }
  guardarEmpleado() {
    if (this.debeEnviar) {
      this.service.guardarNuevo(this.empl)
        .subscribe((nuevo) => {
          console.log('se guardo :D', nuevo);
          this.navCtrl.pop();
        })
    }
  }
  getLocation() {
    if (this.gelocate) {
      this.debeEnviar = false;
      this.geo.get()
        .then((resul) => {
          this.empl.setCoords(resul.coords);
          this.debeEnviar = true;
        })
        .catch((err) => { console.log(err) })
    } else {
      this.empl.cleanCoords();
      console.log(this.empl);

    }
  }
  tomarFoto() {
    const OPTIONS: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(OPTIONS)
      .then((pic) => {
        let img = `data:image/jpeg;base64,${pic}`
        this.empl.photo = img;
        this.dialog.alert(img)
          .then(() => { })
          .catch((e) => { });
      }, (err) => {
        this.dialog.alert(err).then().catch();
      })
  }
}
