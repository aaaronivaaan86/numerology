import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Stripe } from '@ionic-native/stripe';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
  providers: [HTTP]
})
export class CheckoutPage {
  private totalAmount = 0;
  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCVV: string;
  
  private serviceDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dignissimos autem iure, ullam fugiat optio voluptatibus, facere inventore quidem tenetur cumque a tempora? Iusto, pariatur! Atque assumenda necessitatibus quia incidunt?';
  private pdfObj = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP, public stripe: Stripe, private plt: Platform, private file: File, private fileOpener: FileOpener) {
    this.totalAmount = this.navParams.get('total');
    console.log(this.totalAmount);
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.stripe.setPublishableKey('pk_test_lvYbO9Bkuk6CjyrECtebFF4a');
  }


  validateCard(){
    let card = {
      number: this.cardNumber,
      expMonth: this.cardMonth,
      expYear: this.cardYear,
      cvc: this.cardCVV
     };

     // Run card validation here and then attempt to tokenise
     
     this.stripe.createCardToken(card)
        .then(  (token: any) => {
          console.log('First');
          console.log(token);
          
          const payment = {
            token: token.id,
            price: this.totalAmount,
          }
          console.log('Second')
          console.log(payment);
        
        //   const url = 'http://localhost/stripe/stripe.php';
        //   const headers = {
        //     "Content-type": "application/x-www-form-urlencoded"
        //     };

          
        //   return this.http.post(url, payment, {Headers: headers})
        //                   .then((response) => {
        //                         console.log('successfully submitted payment for £', payment.price);
        //   },
        //  (error) => {
        //     console.warn("failed to call stripePayment.php", error);
        // });


        })
        .catch(error => console.error(error));
  }


  makePdf() {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    const docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
        { text: 'From', style: 'subheader' },
        { text: 'To', style: 'subheader' },
        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    };

    this.pdfObj = pdfmake.createPdf(docDefinition);

  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }


}
