import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */




@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

tabsPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }


  slides = [
    {
      title: "Welcome to the Push!",
      description: " with the use of <b> Geolocation </b> you can get the accurate location of nearby events .",
      image: "img/map.png",
    },
    {
      title: "Push Notification",
      description: " Be updated with the current events using our Push Notification, based on your given criteria ",
      image: "img/search.png",
    },
    {
      title: "Responsive & Adaptive",
      description: "Using Ionic and ANGULAR2, our App is very Responsive and Adaptive to every phone",
      image: "img/phone.png",
    }
  ];

}
