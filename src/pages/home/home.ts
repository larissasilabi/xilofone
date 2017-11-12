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

  ok: Boolean;
  playing: Boolean;

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
    this.nativeAudio.play('ligthblue').then(this.onSuccessPlaying, this.onError);
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

  play() {
    if (!this.playing) {
      this.playing = true;
      this.play1();
    }
  }

  exit() {
    swal('Errado!', 'Vamos tentar novamente!', 'error');
    this.ok = false;
    this.events.unsubscribe('button:click');
    this.playing = false;
  }

  async play1() {
    await this.playM1P1();
    await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    await this.validaM1P1();

    await this.events.subscribe('go:level', (id) => {
      console.log("level id" + id);
      if (id === 2) {
        this.playM1P2();
      } else if (id === 3) {
        this.playM1P3();
      } else if (id === 4) {
        this.playM1P4();
      }
    });

  }

  async playM1P1() {
    // DÓ (1), RÉ (1), MI (1), DÓ (1)
    await this.click("C");//1
    await this.wait(1000);
    await this.click("D");//2
    await this.wait(1000);
    await this.click("E");//3
    await this.wait(1000);
    await this.click("C2");//4
    await this.wait(1000);

    //   // DÓ (1), RÉ (1), MI (1), DÓ (1)
    await this.click("C");//5
    await this.wait(1000);
    await this.click("D");//6
    await this.wait(1000);
    await this.click("E");//7
    await this.wait(1000);
    await this.click("C2");//8
    await this.wait(1000);
  }

  async playM1P2() {
    //  MI (1), FÁ (1), SOL (2)
    await this.click("E");
    await this.wait(1000);
    await this.click("F")
    await this.wait(1000);
    await this.click("G")
    await this.wait(2000);

    // MI (1), FÁ (1), SOL (2)
    await this.click("E")
    await this.wait(1000);
    await this.click("F")
    await this.wait(1000);
    await this.click("G")
    await this.wait(2000);

    await swal('Sua vez!', 'Repita a sequencia!', 'warning');

    await this.validaM1P2();
  }

  async playM1P3() {
    // SOL (1/2), LÁ (1/2), SI (1/2), FÁ (1/2), MI (1), DÓ (1)
    await this.wait(1000);
    await this.click("G");
    await this.wait(1000);
    await this.click("A");
    await this.wait(1000);
    await this.click("B");
    await this.wait(1000);
    await this.click("F");
    await this.wait(1000);
    await this.click("E");
    await this.wait(1000);
    await this.click("C");
    await this.wait(2000);

    // SOL (1/2), LÁ (1/2), SI (1/2), FÁ (1/2), MI (1), DÓ (1)
    await this.wait(1000);
    await this.click("G");
    await this.wait(1000);
    await this.click("A");
    await this.wait(1000);
    await this.click("B");
    await this.wait(1000);
    await this.click("F");
    await this.wait(1000);
    await this.click("E");
    await this.wait(1000);
    await this.click("C");
    await this.wait(2000);

    await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    await this.validaM1P3();
  }

  async playM1P4() {
    // DÓ (1), DÓ (1), DÓ (1)
    await this.click("C");
    await this.wait(1000);
    await this.click("B");
    await this.wait(1000);
    await this.click("C2");
    await this.wait(1000);

    // DÓ (1), DÓ (1), DÓ (1)
    await this.click("C");
    await this.wait(1000);
    await this.click("B");
    await this.wait(1000);
    await this.click("C2");
    await this.wait(1000);

    await swal('Sua vez!', 'Repita a sequencia!', 'warning');
    await this.validaM1P4();
  }

  async callLevel(musica, level) {
    switch (musica) {
      case 1:
        await swal('Parabéns!', 'Vamos para a próxima fase!', 'success');
        console.log("level " + level);
        await this.events.unsubscribe('button:click');
        await this.events.publish("go:level", level);
        break;
    }
  }


  wait(ms) {
    return new Promise(resolve => {
      var start = new Date().getTime();
      var end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
      resolve();
    });
  }

  click(button) {
    return new Promise(resolve => {
      document.getElementById(button).className = document.getElementById(button).className.replace(new RegExp("click","g"), "");
      document.getElementById(button).className += "click";
      setTimeout(() => {
        document.getElementById(button).className = document.getElementById(button).className.replace(new RegExp("click","g"), "");
        resolve();
      }, 10, 1);
    });
  }

  async validaM1P1() {
    let sequencia = 1;
    console.log("sequencia : " + sequencia);
    await this.events.subscribe('button:click', (id) => {
      // C, D, E, C
      console.log(id);
      if (sequencia === 1 || sequencia === 5) {
        if (id === "C") {
          sequencia++;
          console.log(sequencia);
        } else {
          this.exit();
        }
      } else if (sequencia === 2 || sequencia === 6) {
        if (id === "D") {
          sequencia++;
          console.log(sequencia);
        } else {
          this.exit();
        }
      } else if (sequencia === 3 || sequencia === 7) {
        if (id === "E") {
          sequencia++;
          console.log(sequencia);
        } else {
          this.exit();
        }
      } else if (sequencia === 4 || sequencia === 8) {
        if (id === "C2") {
          sequencia++;
          console.log(sequencia);
        } else {
          this.exit();
        }
      }
      if (sequencia > 8) {
        this.callLevel(1, 2);
      }
    });
  }


  async validaM1P2() {
    let sequencia = 1;
    console.log("sequencia : " + sequencia);
    await this.events.subscribe('button:click', (id) => {
      console.log("validaM1P2")
      // E, F, G
      if (sequencia === 1 || sequencia === 4) {
        if (id === "E") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 2 || sequencia === 5) {
        if (id === "F") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 3 || sequencia === 6) {
        if (id === "G") {
          sequencia++;
        } else {
          this.exit();
        }
      }
      if (sequencia > 6) {
        this.callLevel(1, 3)
      }
    });
  }

  async validaM1P3() {
    let sequencia = 1;
    console.log("sequencia : " + sequencia);
    await this.events.subscribe('button:click', (id) => {
      console.log("validaM1P3");
      // G, A, G, F, E, C
      if (sequencia === 1 || sequencia === 7) {
        if (id === "G") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 2 || sequencia === 8) {
        if (id === "A") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 3 || sequencia === 9) {
        if (id === "B") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 4 || sequencia === 10) {
        if (id === "F") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 5 || sequencia === 11) {
        if (id === "E") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 6 || sequencia === 12) {
        if (id === "C") {
          sequencia++;
        } else {
          this.exit();
        }
      }
      if (sequencia > 12) {
        this.callLevel(1, 4)
      }
    });
  }

  async validaM1P4() {
    let sequencia = 1;
    console.log("sequencia : " + sequencia);
    await this.events.subscribe('button:click', (id) => {
      console.log("validaM1P4");
      //G, A, G, F, E, C
      if (sequencia === 1 || sequencia === 4) {
        if (id === "C") {
          sequencia++;
        } else {
          this.exit();
        }
      }  else if (sequencia === 2 || sequencia === 5) {
        if (id === "B") {
          sequencia++;
        } else {
          this.exit();
        }
      } else if (sequencia === 3 || sequencia === 6) {
        if (id === "C2") {
          sequencia++;
        } else {
          this.exit();
        }
      }
      if (sequencia > 6) {
        swal('Parabéns!', 'Você ganhou!', 'success');
      }
    });
  }
}
