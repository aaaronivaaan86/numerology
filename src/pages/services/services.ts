import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform  } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { TooltipController } from 'ionic-tooltips';
import { Storage } from '@ionic/storage';
import { ServiceModel } from '../../shared/models/service-model';
import { CheckoutPage } from '../checkout/checkout';
import { numbersList } from '../../shared/const/numbers-list';

import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';
import { NumbersService } from '../../shared/services/numbers.service';

// declare var Stripe;
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [HTTP, TooltipController, NumbersService]
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
  userInfo: User;
  showError = false;

  private pdfObj = null;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: HTTP, 
              private toastCtrl: ToastController,
              public tooltipCtrl: TooltipController,
              private numbersService: NumbersService,
              private strage: Storage) {

      this.serviceList = numbersList.filter(x => x.id > 8);
      this.userInfo = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ServicesPage');
    this.strage.remove("userResults");
    
  }

  addToCart(service: ServiceModel, checkedService: any) {
    // console.log(service);
    // console.log(checkedService);
    if (checkedService)
    {
      
      if (this.serviceOrder.findIndex(n => n.id === service.id) == -1 ) {        
        this.serviceOrder.push(service);
        this.totalAmount += service.price;
      }
    } else {
      
      this.serviceOrder.splice(this.serviceOrder.findIndex(s => service.id === s.id), 1);
      this.totalAmount -= service.price;
    
    }    
  }

  goCheck() {  
    if (this.getNumbers()  && this.serviceOrder.length > 0 ) {
      console.log(this.serviceOrder);      
      this.showError = false;
      this.navCtrl.push(CheckoutPage, {total: this.totalAmount});
    } else {
      this.showError = true;
      return;
    }
  }


  async getNumbers(): Promise<boolean> {
    return await this.strage.get("userInfo").then((data) => {
      // console.log(data);      
      if (data === null) {
        return false;
      } else {        
        this.strage.set("userResults", this.numbersService.getPayNumbers(this.serviceOrder)).then(() => {
          return true;
        })    
      }
    })    
  }




}
