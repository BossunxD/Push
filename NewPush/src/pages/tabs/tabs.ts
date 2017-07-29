import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventsPage } from '../events/events'
import { ProfilePage } from '../profile/profile'
import { ActivityPage } from '../activity/activity'

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = EventsPage;
  tab3Root = ActivityPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
