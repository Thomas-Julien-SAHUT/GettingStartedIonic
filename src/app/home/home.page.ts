import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'
import { NavController } from '@ionic/angular'
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: any;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {

    fetch('./assets/jsons/Auvergne.json').then(res => res.json()).then(json => {
      console.log('results = ', json);
      this.results = json;

      console.log('results = ', this.results);
    })
  }

  showCamera() {
    this.navCtrl.navigateForward("/camera");
  }

  showHttpGetResults() {
    this.navCtrl.navigateForward("/api-results");
  }

  showCity(id: string) {
    this.navCtrl.navigateForward("/city/" + id);
  }

  async toastCapacitor() {
    await Toast.show({
      text: 'Message toast du capacitor : "@capacitor/toast"',
      duration: 'short',
      position: 'top'
    });
  }

  async toaster() {
    let toast = await this.toastCtrl.create({
      message: "Message toast via ToastController de @ionic/angular ",
      duration: 2000,
      position: "middle",
      buttons: [{
        text: "CLOSE",
        role: "CANCEL",
        icon: "close",
        handler: () => {
          console.log('fermer');
        }
      }]
    });
    toast.present();
  }
}
