import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cor:string;
  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }


  playRed(){
    this.cor = "red";
    console.log(this.cor);
    this.nativeAudio.preloadSimple('red', 'assets/audio/red.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
    //this.nativeAudio.preloadSimple('red', 'assets/audio/red.wav').then(this.onSuccessPreloading, this.onError);

  }

  playOrange(){
    this.cor = "orange";
    console.log(this.cor);
    this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.wav');
    this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
    //this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.wav').then(this.onSuccessPreloading, this.onError);
  }

  playYellow(){
    this.cor = "yellow";
    //this.nativeAudio.preloadSimple('yellow', 'assets/audio/yellow.wav').then(this.onSuccessPreloading, this.onError);
  }

  playGreen(){
    this.cor = "green";
    //this.nativeAudio.preloadSimple('green', 'assets/audio/green.wav').then(this.onSuccessPreloading, this.onError);
  }

  playLightBlue(){
    this.cor = "ligthblue";
    //this.nativeAudio.preloadSimple('ligthblue', 'assets/audio/ligthblue.wav').then(this.onSuccessPreloading, this.onError);
  }

  playDarkBlue(){
    this.cor = "darkblue";
   // this.nativeAudio.preloadSimple('darkblue', 'assets/audio/darkblue.wav').then(this.onSuccessPreloading, this.onError);
  }

  playPurple(){
    this.cor = "purple";
    //this.nativeAudio.preloadSimple('purple', 'assets/audio/purple.wav').then(this.onSuccessPreloading, this.onError);
  }

  playPink(){
    this.cor = "pink";
    //this.nativeAudio.preloadSimple('pink', 'assets/audio/pink.wav').then(this.onSuccessPreloading, this.onError);
  }

  onSuccessPreloading = (data) => {
    console.log('success preloading', data);
    console.log('success preloading:' + this.cor);
    //this.nativeAudio.play(this.cor).then(this.onSuccessPlaying, this.onError);
  }

  onError = (data) => {
    console.log('error', data);
  }

  onSuccessPlaying = (data) => {
    console.log('onSuccessPlaying:' + this.cor);
    //this.nativeAudio.unload(this.cor);
    console.log('onSuccessPlaying', data);
  }
}
