import { Component, OnInit } from '@angular/core';
import { Auth, deleteUser, getAuth, user } from '@angular/fire/auth';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
  data: any;
  constructor(
    private firestore: Firestore,
    private auth: Auth,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  getUsers() {
    const dbinstance = collection(this.firestore, 'users');
    const q = query(dbinstance, orderBy('name', 'asc'));
    getDocs(q)
      .then((res) => {
        this.data = [
          ...res.docs.map((doc: any) => {
            return { id: doc.id, ...doc.data() };
          }),
        ];

        console.log(this.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  deleteAccount(data) {
    // deleteUser(data).then(res=>{
    //   console.log(res)
    //   this.presentToast('User Deleted')
    // }
    // ).catch(err=>{
    //   console.log(err.message)

    // }
    // )
    const dbinstance = doc(this.firestore, 'users' + '/' + data);
    deleteDoc(dbinstance)
      .then((res) => {

        this.presentToast('User Deleted')
        this.ngOnInit()
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
