import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {Auth,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updatePassword,sendPasswordResetEmail,signOut} from '@angular/fire/auth'
import { ParamsService } from 'src/app/services/params.service';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  refEqual,
  where,
  query
  
} from '@angular/fire/firestore';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.page.html',
  styleUrls: ['./student-menu.page.scss'],
})
export class StudentMenuPage implements OnInit {

  constructor(private menu: MenuController, private router:Router,private auth:Auth,private firestore:Firestore) { }

  data:any;
  displayName:any;
  sr_code:any;
  email:any;
  ngOnInit() {

    this.getUser()

    console.log(this.data)

   
    
  }


  close(){
    this.menu.close();
  }



  logout(){
    this.menu.close();


    signOut(this.auth).then((res:any)=>{
      console.log('logged out',res);
      this.router.navigate(['/']);
    })
    .catch((err:any)=>{
      console.log(err)
    })
    
  }

  nav(){



    
  }



  getUser(){
    const userid=localStorage.getItem('uid');
    
    const dbinstance = collection(this.firestore, 'users', )

    const q=query(dbinstance,where("uid", "==", userid))

    
    
    
    getDocs(q)
      .then((res: any) => {
        
        
        this.data = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];

        this.displayName=this.data[0].name
        this.sr_code=this.data[0].sr_code
        this.email=this.data[0].email


        
        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
}
