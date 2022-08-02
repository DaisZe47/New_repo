import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { ParamsService } from 'src/app/services/params.service';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ceafa:any[];
  cit:any[];
  steer:any[];
  // total:any;

  

  parking_slots:any=[];

  displayName:any;

  total:any=[];

  totals:any=[1,2,3,4]
  constructor(private animationctrl:AnimationController,private params:ParamsService,private firestore:Firestore) { 

    this.displayName=localStorage.getItem('name')
    console.log(this.displayName)
  }

  ngOnInit() {
    const dbinstance = collection(this.firestore, 'parking_lots')
    getDocs(dbinstance)
      .then((res: any) => {
        
        
        this.parking_slots = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });

      this.getCeafa();
      this.getCit();
      this.getSteer();
      this.getTotal()

      




    // console.log(this.params.getEmail())
  }

  


  getCeafa(){
    const dbinstance = collection(this.firestore, 'parking_lots/tyeJRgia0gOjz5EoefZe/slots')
   
    


    getDocs(dbinstance)
      .then((res: any) => {
       
        
        this.ceafa = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        this.ceafa=this.ceafa.filter((slot)=>slot.status=='available')
        this.total.push(this.ceafa.length)
        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
  getCit(){
    const dbinstance = collection(this.firestore, 'parking_lots/8LcUFDFoZnTRU6JkWc7k/slots')
   
    


    getDocs(dbinstance)
      .then((res: any) => {
       
        
        this.cit = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        this.cit=this.cit.filter((slot)=>slot.status=='available')
        this.total.push(this.cit.length)

        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
  getSteer(){
    const dbinstance = collection(this.firestore, 'parking_lots/7ctjMu53TBNXlnSleDW6/slots')
   
    


    getDocs(dbinstance)
      .then((res: any) => {
       
        
        this.steer = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];


        this.steer=this.steer.filter((slot)=>slot.status=='available')

        this.total.push(this.steer.length)
        

        
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });

      
      


  }


  getTotal(){
    
    console.log(this.total)

    
   

  }

}
