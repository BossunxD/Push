import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.loadData();
  }

  loadData(){
    this.http.get('http://localhost/newpush/api/display_activity.php')
    .map(res => res.json())
    .subscribe(data =>
    {
      this.items = data;

    });
  }

}
