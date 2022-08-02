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
} from '@angular/fire/firestore';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-add-slots',
  templateUrl: './add-slots.page.html',
  styleUrls: ['./add-slots.page.scss'],
})
export class AddSlotsPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  data:any;
  presentingElement = null;
  filteredData:any;


  slotname:any;


  count:any
  slots: any[];
  

  constructor(private firestore:Firestore,private router:Router,) { }

  ngOnInit() {
    this.getParkings()
  }


  getParkings(){
    const dbinstance = collection(this.firestore, 'parking_lots')

    

    


    getDocs(dbinstance)
      .then((res: any) => {
        // console.log(res.docs.map((item:any)=>{
        //   return {...item.data(), id:item.id}
        // }))
        
        this.data = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        console.log(this.data)
        this.count=this.data.length
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });

    
    
    
  }




  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
      console.log(ev.detail.data)
    }
  }

  open(id){
    console.log(id.id)
    this.filteredData=id

    const slotsdb = collection(this.firestore, 'parking_lots/',id.id,'/slots')
    getDocs(slotsdb)
      .then((res: any) => {
        
        
        this.slots = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        console.log(this.slots)
        this.count=this.slots.length
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });

    this.modal.present();
  }

  clear(){
    this.slotname=''
  }

  confirm(){

    let data={
      status:'available',
      slotname:this.slotname,
      ocuppiedBy:'none',
    }

    const dbinstance=collection(this.firestore,'parking_lots/',this.filteredData.id,'/slots')

    
    addDoc(dbinstance,data).then((res:any)=>{
      console.log(res)
      this.modal.dismiss()
      this.ngOnInit()
      this.clear()


     
      
      

    }).catch((err:any)=>{
      console.log(err.message)
      

    })
  }


}
