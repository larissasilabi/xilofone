import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cor:string;

  buttonRed: string = "#cdd3d7";
  buttonOrange: string = "#cdd3d7";
  buttonYellow: string = "#cdd3d7";
  buttonGreen: string = "#cdd3d7";
  buttonLightBlue: string = "#cdd3d7";
  buttonDarkBlue: string = "#cdd3d7";
  buttonPurple: string ="#cdd3d7";
  buttonPink: string = "#cdd3d7";

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }

  onInit() {
    console.log(this.buttonRed);
  }

  playRed(){
    this.cor = "red";
    this.buttonRed = "#f53d3d";
    console.log(this.buttonRed);
    this.nativeAudio.preloadSimple('red', 'assets/audio/red.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playOrange(){
    this.cor = "orange";
    console.log(this.cor);
    this.buttonOrange = "#f76606";
    this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playYellow(){
    this.cor = "yellow";
    this.buttonYellow = "#D8E90F";
    this.nativeAudio.preloadSimple('yellow', 'assets/audio/yellow.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playGreen(){
    this.cor = "green";
    this.buttonGreen = "#34DA04";
    this.nativeAudio.preloadSimple('green', 'assets/audio/green.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playLightBlue(){
    this.cor = "ligthblue";
    this.buttonLightBlue = "#0E94E8";
    this.nativeAudio.preloadSimple('ligthblue', 'assets/audio/ligthblue.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playDarkBlue(){
    this.cor = "darkblue";
    this.buttonDarkBlue = "#1111E8";
    this.nativeAudio.preloadSimple('darkblue', 'assets/audio/darkblue.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playPurple(){
    this.cor = "purple";
    this.buttonPurple = "#6B0760";
    this.nativeAudio.preloadSimple('purple', 'assets/audio/purple.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  playPink(){
    this.cor = "pink";
    this.buttonPink = "#F70965";
    this.nativeAudio.preloadSimple('pink', 'assets/audio/pink.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  onSuccessPreloading = (data) => {
    console.log('success preloading', data);
    console.log('success preloading:' + this.cor);
  }

  onError = (data) => {
    console.log('error', data);
  }

  onSuccessPlaying = (data) => {
    this.buttonRed = "#cdd3d7";
    this.buttonOrange = "#cdd3d7";
    this.buttonYellow = "#cdd3d7";
    this.buttonGreen = "#cdd3d7";
    this.buttonLightBlue = "#cdd3d7";
    this.buttonDarkBlue= "#cdd3d7";
    this.buttonPurple = "#cdd3d7";
    this.buttonPink = "#cdd3d7";
    console.log('onSuccessPlaying', data);
  }
}
