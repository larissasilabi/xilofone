import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('fade', [
      state('active', style({
        opacity: 1
      })),
      state('inactive', style({
        opacity: 0.4
      })),
      transition('active => inactive', animate('.0.3s')),
      transition('inactive => active', animate('.0.3s')),
    ])
  ]
})
export class HomePage {

  controlRed = 'inactive';
  controlOrange = 'inactive';
  controlYellow = 'inactive';
  controlGreen = 'inactive';
  controlLightBlue = 'inactive';
  controlDarkBlue = 'inactive';
  controlPurple = 'inactive';
  controlPink = 'inactive';

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }

  onInit() {
  }

  // C (Dó)
  playC() {
    this.controlRed = (this.controlRed == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('red', 'assets/audio/red.wav');
    this.nativeAudio.play('red').then(this.onSuccessPlaying, this.onError);
    this.wait(3000);
    this.controlRed = (this.controlRed == 'active') ? 'inactive' : 'active';
  }

  // D (Ré)
  playD() {
    this.controlOrange = (this.controlOrange == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.wav');
    this.nativeAudio.play('orange').then(this.onSuccessPlaying, this.onError);
    this.wait(3000);
    this.controlOrange = (this.controlOrange == 'active') ? 'inactive' : 'active';
  }

  // E (Mi)
  playE() {
    this.controlYellow = (this.controlYellow == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('yellow', 'assets/audio/yellow.wav');
    this.nativeAudio.play('yellow').then(this.onSuccessPlaying, this.onError);

  }

  // F (Fá)
  playF() {
    this.controlGreen = (this.controlGreen == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('green', 'assets/audio/green.wav');
    this.nativeAudio.play('green').then(this.onSuccessPlaying, this.onError);
  }

  // G (Sol)
  playG() {
    this.controlLightBlue = (this.controlLightBlue == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('ligthblue', 'assets/audio/ligthblue.wav');
    this.nativeAudio.play('lightblue').then(this.onSuccessPlaying, this.onError);
  }

  // A (Lá)
  playA() {
    this.controlDarkBlue = (this.controlDarkBlue == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('darkblue', 'assets/audio/darkblue.wav');
    this.nativeAudio.play('darkblue').then(this.onSuccessPlaying, this.onError);
  }

  // B (Si)
  playB() {
    this.controlPurple = (this.controlPurple == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('purple', 'assets/audio/purple.wav');
    this.nativeAudio.play('purple').then(this.onSuccessPlaying, this.onError);
  }

  // C (Dó)
  playC2() {
    this.controlPink = (this.controlPink == 'active') ? 'inactive' : 'active';
    this.nativeAudio.preloadSimple('pink', 'assets/audio/pink.wav');
    this.nativeAudio.play('pink').then(this.onSuccessPlaying, this.onError);
  }

  onError = (data) => {
    console.log('error', data);
  }

  onSuccessPlaying = (data) => {
    console.log('onSuccessPlaying', data);
  }

  disable() {
    this.controlRed = 'inactive';
    this.controlOrange = 'inactive';
    this.controlYellow = 'inactive';
    this.controlGreen = 'inactive';
    this.controlLightBlue = 'inactive';
    this.controlDarkBlue = 'inactive';
    this.controlPurple = 'inactive';
    this.controlPink = 'inactive';
  }

  play1() {
    // DÓ (1), RÉ (1), MI (1), DÓ (1)
    this.playC();
    this.wait(1000);
    console.log("finish C");
    this.playD();
    this.wait(1000);
    console.log("finish D");
    this.playE();

    this.wait(1000);
    this.playC();
    this.wait(1000);

    // DÓ (1), RÉ (1), MI (1), DÓ (1)
    this.playC();
    this.wait(1000);
    this.playD();
    this.wait(1000);
    this.playE();
    this.wait(1000);
    this.playC();

    // MI (1), FÁ (1), SOL (2)
    this.playE();
    this.wait(1000);
    this.playF();
    this.wait(1000);
    this.playG();
    this.wait(2000);

    // MI (1), FÁ (1), SOL (2)
    this.playE();
    this.wait(1000);
    this.playF();
    this.wait(1000);
    this.playG();
    this.wait(2000);

    // SOL (1/2), LÁ (1/2), SOL (1/2), FÁ (1/2), MI (1), DÓ (1)
    this.playG();
    this.wait(500);
    this.playA();
    this.wait(500);
    this.playG();
    this.wait(500);
    this.playF();
    this.wait(500);
    this.playE();
    this.wait(1000);
    this.playC();
    this.wait(1000);

    // SOL (1/2), LÁ (1/2), SOL (1/2), FÁ (1/2), MI (1), DÓ (1)
    this.playG();
    this.wait(500);
    this.playA();
    this.wait(500);
    this.playG();
    this.wait(500);
    this.playF();
    this.wait(500);
    this.playE();
    this.wait(1000);
    this.playC();
    this.wait(1000);

    // DÓ (1), DÓ (1), DÓ (1)
    this.playC();
    this.wait(1000);
    this.playC();
    this.wait(1000);
    this.playC();
    this.wait(1000);

    // DÓ (1), DÓ (1), DÓ (1)
    this.playC();
    this.wait(1000);
    this.playC();
    this.wait(1000);
    this.playC();
    this.wait(1000);

  }

  play2() {
    this.playC();
    this.wait(500);
    this.playC2();
    this.wait(500);
    this.playC2();
  }

  play3() {

  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
