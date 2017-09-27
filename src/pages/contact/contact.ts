import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  devices: any[] = [];
  statusMessage: string;

public lists = [];

constructor(private bluetoothserial:BluetoothSerial){
   this.getAllBluetoothDevices();
}

// put BluetoothSerial inside a function, can't be called different
getAllBluetoothDevices(){
    // async so keep everything in this method
    this.bluetoothserial.isEnabled().then((data)=> {
        // not sure of returning value, probably a boolean
        console.log("dont know what it returns"+data);

        // returns all the available devices, not just the unpaired ones
        this.bluetoothserial.list().then((allDevices) => {
            // set the list to returned value
            this.lists = allDevices;
        });
    });
   }

}
