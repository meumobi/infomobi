import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var Hls: any;
@IonicPage()
@Component({
  selector: 'page-streaming',
  templateUrl: 'streaming.html',
})
export class StreamingPage implements AfterViewInit {
  url = '';
  hls: any;
  @ViewChild('myvid') vid: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  play() {
    this.vid.play();
  }

  ngAfterViewInit() {
    this.url = this.navParams.data.url;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.url);
      hls.attachMedia(this.vid.nativeElement);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        console.log('aaa');
        this.vid.play();
        console.log('bbb');
    });
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamingPage');
  }

}
