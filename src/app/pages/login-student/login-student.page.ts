import { Component, OnInit } from '@angular/core';
import {Auth,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updatePassword,sendPasswordResetEmail,signOut,updateProfile} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ParamsService } from 'src/app/services/params.service';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {


  email:any;
  password:any;
  constructor(private auth:Auth,public toastController: ToastController, private router:Router,private service:ParamsService) { }

  ngOnInit() {

    this.clear()
  }

  clear(){
    this.email = "";
    this.password = "";
  }

 
  async toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  login(){

 
    

    
    signInWithEmailAndPassword(this.auth,this.email,this.password).then((res:any)=>{
      
   
   
      this.toast('Successfully Logged in.');
       console.log(res.user)

     
      localStorage.setItem('uid',res.user.uid)
      localStorage.setItem('email',res.user.email)
      localStorage.setItem('name',res.user.displayName)
      

      
      



      this.router.navigate(['/student-dashboard/main-menu/home']);

     

    })
    .catch((err:any)=>{
      console.log(err)
      this.toast(err);


    })
    


    this.clear()
  }


  showPassword(input){
    input.type=input.type==="password" ? "text" : "password"

  }


  
}
