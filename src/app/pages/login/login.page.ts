import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  sample: any = [
    {
      id: 1,
      name: 'Student',
    },
    {
      id: 2,
      name: 'Admin',
    },
    {
      id: 3,
      name: 'Guard',
    },

  ]
  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {

    const animation: Animation = this.animationCtrl.create()
    .addElement(document.getElementById('svg1'))
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
  }

}
