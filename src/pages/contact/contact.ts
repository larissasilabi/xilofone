import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import swal from 'sweetalert2';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  texto: string;
  recebido: string;
  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }

  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }

  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) {
    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();
  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }

  send() {
    this.bluetoothSerial.write(this.texto);
    this.bluetoothSerial.read().then((data) => { this.recebido = data });
  }

  async send1() {
    // Musica 1 - 3 partes
    await this.bluetoothSerial.write('M04');
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'ERRO') {
        // lancar uma excessao
        swal(
          'Oops...',
          'Erro na conexão com o Bluetooth',
          'error'
        );
      }
    });

    // PXXYZZZZN...
    // P - parte da musica
    // XX - numero da parte
    // Y - seguir/repetir
    // ZZZZ - quantidade de pares (nota,tempo)
    // N - pares (nota,tempo)

    // DÓ (1), RÉ (1), MI (1), DÓ (1) 2x
    await this.bluetoothSerial.write('P01S0008C10D10E10C10C10D10E10C10');
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'ERRO') {
        // lancar uma excessao
        swal(
          'Oops...',
          'Erro na conexão com o Bluetooth',
          'error'
        );
      }
    });
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'E') {
        swal(
          'Você perdeu...',
          'Não foi dessa vez...Tente novamente!',
          'error'
        );
      }
    });

    // MI (1), FÁ (1), SOL (2) 2x
    await this.bluetoothSerial.write('P020006E10F10G20E10F10G20');
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'ERRO') {
        // lancar uma excessao
        swal(
          'Oops...',
          'Erro na conexão com o Bluetooth',
          'error'
        );
      }
    });
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'E') {
        swal(
          'Você perdeu...',
          'Ah que pena! Vamos lá, tente novamente!',
          'error'
        );
        // sair
      }
    });

    //  SOL (1/2), LÁ (1/2), SOL (1/2), FÁ (1/2), MI (1), DÓ (1) 2x
    await this.bluetoothSerial.write('P030012G05A05G05F05E10C10G05A05G05F05E10C10');
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'ERRO') {
        // lancar uma excessao
        swal(
          'Oops...',
          'Erro na conexão com o Bluetooth',
          'error'
        );
      }
    });
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'E') {
        swal(
          'Você perdeu...',
          'Só mais um poquinho de atenção, você consegue!',
          'error'
        );
        // sair
      }
    });

    //  DÓ (1), DÓ (1), DÓ (1) 2x
    await this.bluetoothSerial.write('P040006C10C10C10C10C10C10');
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'ERRO') {
        // lancar uma excessao
        swal(
          'Oops...',
          'Erro na conexão com o Bluetooth',
          'error'
        );
      }
    });
    await this.bluetoothSerial.read().then((data) => {
      if (data == 'E') {
        swal(
          'Você perdeu...',
          'Quase lá, você estava tão perto! Não desista!',
          'error'
        );
      }
    });

    await swal(
      'Parabéns !',
      'Você ganhou!!!',
      'success'
    );
  }

}

