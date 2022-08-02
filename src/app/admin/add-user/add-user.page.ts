import { Component, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import {
  collection,
  addDoc,
  Firestore,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  name: any;
  sr_code: any;
  email: any;
  password: any;
  role:any
  constructor(private auth:Auth,private firestore:Firestore,private toast:ToastController,private router:Router) {}

  ngOnInit() {
  }

  clear(){
    this.name='';
    this.sr_code='';
    this.email='';
    this.password='';
    this.role='';
  }
  
  onSubmit() {
    // console.log(this.name, this.sr_code, this.email, this.password);
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
        
        role:this.role,
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
    

      // navigate back
      this.router.navigate(['/admin-menu']);


      console.log(res);
      this.clear()

     

    })
    .catch((err:any)=>{
      console.log(err)
     

    })

  }

}
