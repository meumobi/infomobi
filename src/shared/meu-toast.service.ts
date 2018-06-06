import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class MeuToastProvider {

  constructor(public toastCtrl: ToastController) {
      console.log('thumbImage pipe');
  }

  present(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}