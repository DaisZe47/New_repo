import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuPageRoutingModule } from './main-menu-routing.module';

import { MainMenuPage } from './main-menu.page';
import { HomePage } from '../home/home.page';
import { ParkingsPage } from '../parkings/parkings.page';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuPageRoutingModule,
    
  ],
  declarations: [MainMenuPage,HomePage,ParkingsPage]
})
export class MainMenuPageModule {}
