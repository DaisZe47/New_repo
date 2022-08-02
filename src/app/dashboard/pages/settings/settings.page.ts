import { Component, OnInit } from '@angular/core';
import {Auth,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updatePassword,sendPasswordResetEmail} from '@angular/fire/auth'
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  
  email:any

  constructor(private auth:Auth,private toast: ToastController,private alertController: AlertController) { 
    this.email=localStorage.getItem('email')

    console.log(this.email)


  }

  ngOnInit() {
    
    
  }

  async showToast(message){
    const toast = await this.toast.create({
      message:message,
      duration:2000
    })
    toast.present()
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Reset your Password?',
      message:"An email will be sent to you confirming your action. <br/> <small>Note: If you didn't receive an email, please check you spam emails.</small>",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { alert.dismiss() }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.resetPassword() }
        }
      ]
    });

    await alert.present();

    
  }


  resetPassword(){

    sendPasswordResetEmail(this.auth,this.email).then(res=>{
      console.log(res)


      this.showToast('Password reset email has been sent')
    }).catch(error=>{
      console.log(error)

      this.showToast('Password reset email failed')

    })

  }

}
