import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lottieConfig = {
      path: 'assets/animations/modern-clean/data.json',
      renderer: 'svg',
      autoplay: true,
      loop: true,
      rendererSettings: {
        progressiveLoad: false
      },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }
}
