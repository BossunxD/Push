import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registerPage = RegisterPage;
  tabsPage = TabsPage;



  constructor(public navCtrl: NavController) {

  }

}
