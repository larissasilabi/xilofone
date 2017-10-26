import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { trigger, state, style, transition, animate } from '@angular/animations'
import swal from 'sweetalert2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio, public events: Events) {

  }

  onInit() {
  }

  // C (Dó)
  playC() {
    this.nativeAudio.preloadSimple('red', 'assets/audio/red.wav');
    this.nativeAudio.play('red').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "C");
  }

  // D (Ré)
  playD() {
    this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.wav');
    this.nativeAudio.play('orange').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "D");
  }

  // E (Mi)
  playE() {
    this.nativeAudio.preloadSimple('yellow', 'assets/audio/yellow.wav');
    this.nativeAudio.play('yellow').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "E");
  }

  // F (Fá)
  playF() {
    this.nativeAudio.preloadSimple('green', 'assets/audio/green.wav');
    this.nativeAudio.play('green').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "F");
  }

  // G (Sol)
  playG() {
    this.nativeAudio.preloadSimple('ligthblue', 'assets/audio/ligthblue.wav');
    this.nativeAudio.play('lightblue').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "G");
  }

  // A (Lá)
  playA() {
    this.nativeAudio.preloadSimple('darkblue', 'assets/audio/darkblue.wav');
    this.nativeAudio.play('darkblue').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "A");
  }

  // B (Si)
  playB() {
    this.nativeAudio.preloadSimple('purple', 'assets/audio/purple.wav');
    this.nativeAudio.play('purple').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "B");
  }

  // C (Dó)
  playC2() {
    this.nativeAudio.preloadSimple('pink', 'assets/audio/pink.wav');
    this.nativeAudio.play('pink').then(this.onSuccessPlaying, this.onError);
    this.events.publish('button:click', "C2");
  }

  onError = (data) => {
    console.log('error', data);
  }

  onSuccessPlaying = (data) => {
    console.log('onSuccessPlaying', data);
  }

  async play1() {
    await this.playM1P1();
    await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    await this.validaM1(1, 8);
    //await this.playM1P2();
    // await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    // await this.validaM1(2, 6);
    // await swal('Parabéns!', 'Vamos para a terceira fase!', 'success');
    // await this.playM1P3();
    // await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    // await this.validaM1(3, 12);
    // await swal('Parabéns!', 'Vamos para a última fase!', 'success');
    // await this.playM1P4();
    // await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    // await this.validaM1(4, 6);
    // await swal('Parabéns!', 'Você ganhou!', 'success');
  }

  async playM1P1() {
    // DÓ (1), RÉ (1), MI (1), DÓ (1)
    await this.click("C");//1
    await this.wait(1000);
    await this.click("D");//2
    await this.wait(1000);
    await this.click("E");//3
    await this.wait(1000);
    await this.click("C");//4
    await this.wait(2000);

    //   // DÓ (1), RÉ (1), MI (1), DÓ (1)
    await this.click("C");//5
    await this.wait(1000);
    await this.click("D");//6
    await this.wait(1000);
    await this.click("E");//7
    await this.wait(1000);
    await this.click("C");//8
    await this.wait(1000);
    console.log("fim primeira parte");
  }

  async playM1P2() {
    //  MI (1), FÁ (1), SOL (2)
    await this.playE();
    await this.wait(1000);
    await this.playF();
    await this.wait(1000);
    await this.playG();
    await this.wait(2000);

    // MI (1), FÁ (1), SOL (2)
    await this.playE();
    await this.wait(1000);
    await this.playF();
    await this.wait(1000);
    await this.playG();
    await this.wait(2000);

    console.log("fim segunda parte");

    await this.validaM1(2, 6);
  }

  async playM1P3() {
    // SOL (1/2), LÁ (1/2), SOL (1/2), FÁ (1/2), MI (1), DÓ (1)
    await this.playG();
    await this.wait(500);
    await this.playA();
    await this.wait(500);
    await this.playG();
    await this.wait(500);
    await this.playF();
    await this.wait(500);
    await this.playE();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);

    // SOL (1/2), LÁ (1/2), SOL (1/2), FÁ (1/2), MI (1), DÓ (1)
    await this.playG();
    await this.wait(500);
    await this.playA();
    await this.wait(500);
    await this.playG();
    await this.wait(500);
    await this.playF();
    await this.wait(500);
    await this.playE();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);

    console.log("fim terceira parte");

    await this.validaM1(3, 12);
  }

  async playM1P4() {
    // DÓ (1), DÓ (1), DÓ (1)
    await this.playC();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);

    // DÓ (1), DÓ (1), DÓ (1)
    await this.playC();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);
    await this.playC();
    await this.wait(1000);

    await this.validaM1(4, 6);
  }

  play2() {
    this.playC();
    this.wait(500);
    this.playC2();
    this.wait(500);
    this.playC2();
  }

  play3() {
    // this.click("C");
    // this.click("D");
    // this.click("E");
    // this.click("F");
    // this.click("G");
    // this.click("A");
    // this.click("B");
    // this.click("C2");
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  click(button) {
    return new Promise(resolve => {
      document.getElementById(button).className += "click";
      setTimeout(() => {
        document.getElementById(button).className = document.getElementById(button).className.replace("click", "");
        resolve();
      }, 500, 1);
    });
  }

  async validaM1(parte, tamanho) {
    console.log("parte : " + parte);
    console.log("tamanho : " + tamanho);
    let ok = true;
    let sequencia = 1;
    await this.events.subscribe('button:click', (id) => {
      switch (parte) {
        case 1:
          // C, D, E, C
          console.log(id);
          if (sequencia === 1 || sequencia === 4 || sequencia === 5 || sequencia === 8) {
            if (id === "C") {
              sequencia++;
              console.log(sequencia);
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 2 || sequencia === 6) {
            if (id === "D") {
              sequencia++;
              console.log(sequencia);
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 3 || sequencia === 7) {
            if (id === "E") {
              sequencia++;
              console.log(sequencia);
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          }
          if (sequencia > tamanho) {
            swal('Parabéns!', 'Vamos para a segunda fase!', 'success');
            console.log("unsubscribe");
            this.events.unsubscribe('button:click');
          }

          break;


        case 2:
          // E, F, G
          if (sequencia === 1 || sequencia === 4) {
            if (id === "E") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 2 || sequencia === 5) {
            if (id === "F") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 3 || sequencia === 6) {
            if (id === "G") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          }
          if (sequencia > tamanho) {
            console.log("unsubscribe");
            this.events.unsubscribe('button:click');
          }
          break;

        case 3:
          // G, A, G, F, E, C
          if (sequencia === 1 || sequencia === 3 || sequencia === 7 || sequencia === 9) {
            if (id === "G") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 2 || sequencia === 8) {
            if (id === "A") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 4 || sequencia === 10) {
            if (id === "F") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 5 || sequencia === 11) {
            if (id === "E") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          } else if (sequencia === 6 || sequencia === 12) {
            if (id === "C") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          }
          if (sequencia > tamanho) {
            console.log("unsubscribe");
            this.events.unsubscribe('button:click');
          }
          break;

        case 4:
          //G, A, G, F, E, C
          if (sequencia >= 1 && sequencia <= 6) {
            if (id === "C") {
              sequencia++;
            } else {
              swal('Errado!', 'Vamos tentar novamente!', 'error');
              ok = false;
            }
          }
          if (sequencia > tamanho) {
            console.log("unsubscribe");
            this.events.unsubscribe('button:click');
          }
          break;
      }
    });
  }
}
