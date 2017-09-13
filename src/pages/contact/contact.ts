import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public lists = [];
  public result = [];

  constructor(public navCtrl: NavController, private ble: BLE) {

    
  }

  private testarBluetooth() {
    

  }
}
