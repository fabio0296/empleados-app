import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEmployee } from './new-employee';

@NgModule({
  declarations: [
    NewEmployee,
  ],
  imports: [
    IonicPageModule.forChild(NewEmployee),
  ],
  exports: [
    NewEmployee
  ]
})
export class NewEmployeeModule {}
