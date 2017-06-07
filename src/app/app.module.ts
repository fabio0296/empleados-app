import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EmpleadoService } from '../services/empleados.service';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { AboutPage } from '../pages/about/about';
import { NewEmployee } from '../pages/new-employee/new-employee';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Details } from '../pages/details/details';
import { Edit } from '../pages/edit/edit';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationService } from '../services/geolocalizacion.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NewEmployee,
    HomePage,
    Details,
    Edit,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NewEmployee,
    Details,
    Edit,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmpleadoService,
    Geolocation,
    Camera,
    GeolocationService,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
