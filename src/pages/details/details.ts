import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NumerologyNum } from '../../shared/models/number';
import { numbers } from '../../shared/models/numbers';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public idNumberType: string;
  private numberName: string;
  private idUserNumber: string;
  public detailName: string;
  public detailContent: string;

  private numberDescription = numbers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService: Storage, ) {
    this.idNumberType = this.navParams.get('idNumber');
    this.numberName = this.navParams.get('numberName');
    this.idUserNumber = this.navParams.get('usrNumber');
    console.log(this.idNumberType, this.idUserNumber, this.numberName);

    this.setViewDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  setViewDetail() {
    this.detailName = this.numberName;

    // if for Initial Letter of Name
    if (this.idNumberType.toString() === "9") {
      let userName: string;
      this.storageService.get("userInfo").then((data) => {
        try {
          // get initial
          userName = data.userName.substr(0, 1).toUpperCase();
          // Get Type Number
          const details: NumerologyNum = this.numberDescription.find(x => x.id === this.idNumberType.toString());
          // Extract number, details and letter
          const numberDetails = details.numbers
            .find(x => x.id === this.idUserNumber.toString())
            .letters.find(x => x.letters === userName);
          this.detailContent = numberDetails.content;
        } catch (err) {
          console.log(err);
        }
      });
    } else if (this.idNumberType.toString() === "28" || this.idNumberType.toString() === "27"   ) {
      
      let usrDetailContent = "";

      const userNum = this.idUserNumber.toString().split('');
      const details: NumerologyNum = this.numberDescription.find(x => x.id === this.idNumberType.toString());
      
      userNum.forEach(number => {
        const numberDetails = details.numbers.find(x => x.id === number.toString());
        usrDetailContent += '\n' + numberDetails.content ;
        // console.log(number.toString());
        
      });
      this.detailContent = usrDetailContent;
      // console.log(usrDetailContent);
      this.idUserNumber = 'Energías: ';
    
    }  else {

      try {        
        const details: NumerologyNum = this.numberDescription.find(x => x.id === this.idNumberType.toString());
        const numberDetails = details.numbers.find(x => x.id === this.idUserNumber.toString());
        this.detailContent = numberDetails.content;
        console.log(details);
      } catch (error) {
        console.log(error);
        
      }

    }


  }

}
