import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentMenuPageRoutingModule } from './student-menu-routing.module';

import { StudentMenuPage } from './student-menu.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentMenuPageRoutingModule
  ],
  declarations: [StudentMenuPage],
  
})
export class StudentMenuPageModule {}
