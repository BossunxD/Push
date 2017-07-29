import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {



  public items : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,  public http   : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.loadData();
  }


  loadData(){
    this.http.get('http://localhost/newpush/api/display_event.php')
    .map(res => res.json())
    .subscribe(data =>
    {
      this.items = data;

    });
  }
}
