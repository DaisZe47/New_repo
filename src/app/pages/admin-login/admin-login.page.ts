import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {Auth,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updatePassword,sendPasswordResetEmail,signOut,updateProfile} from '@angular/fire/auth'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  
  srcode:any;
  password:any;
  constructor(private auth:Auth,public toastController: ToastController, private router:Router) { }

  ngOnInit() {

    this.clear()
  }

  clear(){
    this.srcode = "";
    this.password = "";
  }

  // toasts
  async toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  login(){
    console.log(this.srcode);
    console.log(this.password);


    if(this.srcode=='admin'&&this.password=='admin1234'){
      this.toast('Successfully Logged in as Admin.');
      this.router.navigate(['/admin-menu']);
    }
    else{
      this.toast('Invalid Credentials.');
    }


  


    this.clear()
  }

  showPassword(input: any){
    input.type = input.type === 'password' ?  'text' : 'password';
   }

}
