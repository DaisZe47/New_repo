import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {


  email:any;
  constructor() { 
  }


  setEmail(data:any){
    this.email = data;

       
  }

  getEmail(){
    return this.email;
  }

  removeEmail(){
    this.email = null;
  }
}
