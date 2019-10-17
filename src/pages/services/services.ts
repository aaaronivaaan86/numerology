import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform  } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { TooltipController } from 'ionic-tooltips';
import { ServiceModel } from '../../shared/models/service-model';
import { CheckoutPage } from '../checkout/checkout';
import { numbersList } from '../../shared/models/numbers-list';

import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// declare var Stripe;
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [HTTP, TooltipController]
})
export class ServicesPage {

  private totalAmount = 0;
  private serviceDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dignissimos autem iure, ullam fugiat optio voluptatibus, facere inventore quidem tenetur cumque a tempora? Iusto, pariatur! Atque assumenda necessitatibus quia incidunt?';
  private serviceOrder: ServiceModel[] = new Array<ServiceModel>();
  public serviceList: ServiceModel[];

  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCVV: string;
  private pdfObj = null;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: HTTP, 
              private toastCtrl: ToastController,
              public tooltipCtrl: TooltipController) {

      this.serviceList = numbersList.filter(x => x.id > 8);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');

  }

  addToCart(service: ServiceModel, checkedService: any) {
    console.log(service);
    console.log(checkedService);    
    if (checkedService)
    {
      this.serviceOrder.push(service);
      this.totalAmount += service.price; 
    } else {
      const idxRemove = this.serviceOrder.findIndex(s => service.id === s.id);
      this.serviceOrder.splice(idxRemove, 1);
      this.totalAmount -= service.price;
    }

    console.log(this.serviceOrder);
    
  }

  goCheck() {
    this.navCtrl.push(CheckoutPage, {total: this.totalAmount});
  }




  




}
