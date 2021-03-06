import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerce: any;
  products: any[];

  constructor(public navCtrl: NavController) {

    this.WooCommerce = WC({
      url:"http://samarth.cloudapp.net",
        consumerKey: "ck_b615342c28e3aa9b0b9d384852cda85a82155197",
        consumerSecret:"cs_d75f28e39ae9f06318608cec44fc77dd75ce6427"
    });
    this.WooCommerce.getAsync("products").then( (data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err)=> {
      console.log(err)
    })
  }

}
