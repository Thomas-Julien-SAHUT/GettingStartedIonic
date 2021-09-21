import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType, CameraSource} from '@capacitor/camera';

import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular'



@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photo: SafeResourceUrl;
  dataPic: String

  constructor(private alerteCtrl: AlertController,private sanitizer: DomSanitizer, private storage: Storage) { }

  async takePicture() {
    const img = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(img && (img.dataUrl));
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  async save() {
    let alert = await this.alerteCtrl.create({
      header: "Enregistrement",
      subHeader: "Alerte enregistrement",
      message: "Souaitez-vous enregistrer l'image ?",
      inputs: [
        {
          name: "nom",
          type: "text",
          placeholder: "Enter your name"
        },
        {
          name: "email",
          type: "email",
          placeholder: "example.ionic@gmail.com"
        }
      ],
      buttons: [
        {
          text: "CLOSE",
          handler: () => {
            console.log('fermer');
          }
        },
        {
          text: "Enregistrer",
          handler: async (data) => {
            console.log(data);
            await this.storage.set('picture', this.photo);
            this.dataPic = await this.storage.get('picture');
            console.log(this.dataPic);
          }
        }
      ]
    });

    alert.present();
  }
}
