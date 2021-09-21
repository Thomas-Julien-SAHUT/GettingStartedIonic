import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: string
  country: string = "FRANCE";

  results: any = {};
  etat: boolean = false;

  constructor(private activatedRouter: ActivatedRoute) {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    console.log(this.id);

    fetch('./assets/jsons/Auvergne.json').then(res => res.json()).then(json => {
      var y = this.id;
      console.log('results = ', json[y]);
      this.results = json[y];
    })
  }

  ngOnInit() {

  }

  moreInfo() {
    this.etat = true;
  }
}
