import { Injectable } from '@angular/core';



@Injectable()
export class PaymentsService {


    // paymentdata : any;
    // paymentdetails: any;
    // private PayPal: PayPal = new PayPal();
    // constructor() {}
    // initiatePaypal(){
    //     this.PayPal.init({
    //             "PayPalEnvironmentProduction": "ASen7oeTeHkMrAVRHAvdTgGjbKooNPwhaSzcyRfU7ig5p_VrdOxukviAKSGp0iaICbchaPcar4mm-etA",
    //             "PayPalEnvironmentSandbox": "AFcWxV21C7fd0v3bYYYRCpSSRl31ACxTIGBF1mQyNN7DjU1eCzpAZer8"
    //             })
    //         .then(onSuccess => {
    //             console.log("init success")
    //         })
    //         .catch(onError => {
    //             console.log("init failed", Error)
    //         });
    //     }
    //     initiatePayment(){
    //         this.paymentdata = new PayPalPayment("10.00","SGD", "MMS tickets", "MMS sale");        
    //         this.PayPal.renderSinglePaymentUI(this.paymentdata)
    //         .then(onSuccess => {
    //              console.log('OnSuccess Render: ' + JSON.stringify(onSuccess));
    //              alert('OnSuccess Render: ' + JSON.stringify(onSuccess));
    //            })
    //         .catch(onError=> {
    //            console.log('onError Render: ' + JSON.stringify(onError));
    //            alert('onError Render: ' + JSON.stringify(onError));
    //              });
    //     }        

}