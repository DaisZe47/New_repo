import { Component, OnInit } from '@angular/core';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.page.html',
  styleUrls: ['./parkings.page.scss'],
})
export class ParkingsPage implements OnInit {

  parking_slots:any;
  
  constructor(private firestore:Firestore,private router:Router) { }

  ngOnInit() {

    const dbinstance = collection(this.firestore, 'parking_lots')

    

    


    getDocs(dbinstance)
      .then((res: any) => {
        // console.log(res.docs.map((item:any)=>{
        //   return {...item.data(), id:item.id}
        // }))
        console.log(res.docs)
        
        this.parking_slots = [
          ...res.docs.map((doc: any) => {

            return {  id: doc.id ,...doc.data(),};

          }),

        ];
        console.log(this.parking_slots)
        
      })
      .catch((err: any) => {
        console.log(err.message);
      });


  }


  onClick(){
    console.log('test')
  }


  navigate(id:any){
    this.router.navigate(['/choose-parking/'+id])
    console.log(id)

  }

  

}
