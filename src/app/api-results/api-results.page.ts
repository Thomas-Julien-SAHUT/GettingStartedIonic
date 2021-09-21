import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoadingController } from '@ionic/angular'


@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.page.html',
  styleUrls: ['./api-results.page.scss'],
})
export class ApiResultsPage implements OnInit {

  items: any = [];

  constructor(private httpCli: HttpClient, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    let loading = await this.loadingCtrl.create({
      message: "LOADING...",
      cssClass: "my-custom-wait-class",
    })
    loading.present();

    setTimeout(() => {
      this.httpCli.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
        console.log(data);
        this.items = data;
      });
      loading.dismiss();
    }, 5000)
  }
}
