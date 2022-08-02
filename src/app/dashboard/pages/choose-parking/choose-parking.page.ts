import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  query,
  where
} from '@angular/fire/firestore';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { Storage,ref,uploadBytesResumable ,getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-choose-parking',
  templateUrl: './choose-parking.page.html',
  styleUrls: ['./choose-parking.page.scss'],
})
export class ChooseParkingPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;


  id:any;
  parking_slots:any=[];
  available:any=[]

  parking_space:any;

  title:any=[];


  public file:any={}
  presentingElement = null;


  slot:any;
  slotId:any;
  action:any;
  user:any;
  occupation:any

  userData:any=[];


  constructor(private nav:NavController,private firestore:Firestore ,private activated:ActivatedRoute,private storage:Storage) { 
    this.id=this.activated.snapshot.paramMap.get('id');
    console.log(this.id)


    this.user=localStorage.getItem('name')
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');





    const dbinstance = collection(this.firestore, 'parking_lots/',this.id,'/slots')
   
    


    getDocs(dbinstance)
      .then((res: any) => {
       
        
        this.parking_slots = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];

        this.available=this.parking_slots.filter((space:any)=>space.status=='available')
        console.log(this.available)

        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
      

      this.getTitle()


      this.getUser()

    
  }

  getTitle(){
    const dbinstance = collection(this.firestore, 'parking_lots')

    


    getDocs(dbinstance)
      .then((res: any) => {
      
        
        this.parking_space = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        this.title=this.parking_space.filter((space:any)=>space.id==this.id)
        this.title=this.title[0]
        
        console.log(this.title)
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }



  back(){

    this.nav.back()
  }

  
  getContent() {
    return document.querySelector('ion-content');
  }
  
  logScrollStart(){

    
    this.getContent().scrollToTop(500);
  }


  // choosefile(event:any){
  //   this.file=event.target.files
  //   console.log(this.file)
  // }


  



  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // this.message = `Hello, ${ev.detail.data}!`;
      console.log(ev.detail.data)
    }
  }




  onClick(id:any){
    console.log(id)
    this.slot=id.slotname
    this.slotId=id.id
    this.occupation=id.occupiedBy


    
    this.modal.present();
  }
  confirm() {
    this.modal.dismiss();

    console.log(this.action)
    this.update()
    this.ngOnInit()
  }



  update(){
    

    let data={
      
      status:this.action,
      occupiedBy:this.action=='available'?'none':this.user,
    }
    const updatedoc=doc(this.firestore,'parking_lots/',this.id,'/slots',this.slotId)
    updateDoc(updatedoc,data).then((res:any)=>{
     
      console.log('Post Updated')

      this.ngOnInit()
     
      
      

    }).catch((err:any)=>{
      console.log(err.message)
      

    })
  }



  getUser(){
    const userid=localStorage.getItem('uid');
    
    const dbinstance = collection(this.firestore, 'users', )

    const q=query(dbinstance,where("uid", "==", userid))

    
    
    
    getDocs(q)
      .then((res: any) => {
        
        
        this.userData = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];

        this.userData=this.userData[0]
        console.log(this.userData)

        


        
        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }



  

}




