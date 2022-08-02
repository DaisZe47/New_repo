import { Component, OnInit } from '@angular/core';
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  refEqual,
} from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: any;
  sr_code: any;
  email: any;
  password: any;
  constructor(private auth:Auth,private firestore:Firestore,private toast:ToastController) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.name, this.sr_code, this.email, this.password);
    const dbinstance=collection(this.firestore,'users');
    


    createUserWithEmailAndPassword(this.auth,this.email,this.password).then((res:any)=>{
      
      updateProfile(this.auth.currentUser,{
        displayName:this.name,
      }).catch((res)=>{
        console.log(res)
      })


      let data={
        name:this.name,
        sr_code:this.sr_code,
        email:this.email,
        
        role:'student',
        uid:res.user.uid,
  
      }
      addDoc(dbinstance,data).then(res=>{
        console.log(res)

        this.toast.create({
          message:'Successfully Signed Up',
          duration:2000
        }).then(res=>{
          res.present();
        })

        
      }).catch(error=>{
        console.log(error)
      })
    

      


      console.log(res);
     

    })
    .catch((err:any)=>{
      console.log(err)
     

    })
  }
}
