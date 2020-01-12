import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Stripe } from '@ionic-native/stripe';
import { Storage } from '@ionic/storage';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { NumberView } from '../../shared/models/number-view';
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
  userName: string;
  
  private serviceDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dignissimos autem iure, ullam fugiat optio voluptatibus, facere inventore quidem tenetur cumque a tempora? Iusto, pariatur! Atque assumenda necessitatibus quia incidunt?';
  private pdfObj = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HTTP,
              public stripe: Stripe,
              private storage: Storage,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener) {
    this.totalAmount = this.navParams.get('total');
    // console.log(this.totalAmount);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.stripe.setPublishableKey('pk_test_lvYbO9Bkuk6CjyrECtebFF4a');
    this.storage.get('userInfo').then((data) => {
      this.userName = data.userName;            
    });
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
        })
        .catch(error => console.error(error));
  }

  makePdf() {
    this.storage.get("userResults").then((data) => {
      console.log(data);
      if (data === null) {
        return
      } else {
        this.buildPdf(data);        
      }      
    });  
  }

  private buildPdf(data: any) {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    const res = [];
    const documentTitle = {
      text: 'Numerología para tu vida',
      style: 'header'
    };
    res.push(documentTitle);
    const documentDate = {
      text: new Date().toLocaleDateString(),
      style: 'docDate'
    };
    res.push(documentDate);
    const documentUserName = {
      text: this.userName,
      style: 'userName'
    };
    res.push(documentUserName);
    const documentUserGreeting = {
      text: 'A continuación te presentamos los resultados de tu estudio numerológico',
      style: 'numberContent'
    };
    res.push(documentUserGreeting);
    data.forEach((r: NumberView) => {
      const numberResultNumberName = {
        text: r.numberName,
        style: 'numberName'
      };
      res.push(numberResultNumberName);
      const numberResultContent = {
        text: r.content,
        style: 'numberContent'
      };
      res.push(numberResultContent);
    });
    const docDefinition = {
      content: res,
      styles: {
        header: {
          fontSize: 32,
          alignment: 'center',
          color: '#068587',
        },
        docDate: {
          margin: [0, 0, 0, 20],
          color: '#C3D3D3',
          alignment: 'right'
        },
        numberName: {
          color: '#69ADBA',
          fontSize: 18,
          bold: true,
          alignment: 'right'
        },
        userName: {
          color: '#69ADBA',
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        numberContent: {
          fontSize: 14,
          alignment: 'justify',
          margin: [0, 0, 0, 20]
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
