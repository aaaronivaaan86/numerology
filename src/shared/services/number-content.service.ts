import { Injectable } from '@angular/core';
import { numbers } from '../../shared/const/numbers';
import { NumerologyNum } from '../models/number';


@Injectable()
export class NumberContentService  {

    private numbersContent = numbers;
    constructor( ) {

    }

    getNumberContent(idNumberType: string, idUserNumber, userName) {

    // if for Initial Letter of Name
    if (idNumberType.toString() === "9") {
        try {
            // console.log(idNumberType, idUserNumber, userName);                      
            // get initial
            const userLetter = userName.substr(0, 1).toUpperCase();
            // console.log(userLetter);
            
            // Get Type Number
            const details: NumerologyNum = this.numbersContent.find(x => x.id === idNumberType.toString());            
            // Extract number, details and letter
            // console.log(details);            
            return details.numbers
              .find(x => x.id === idUserNumber.toString())
              .letters.find(x => x.letters === userLetter).content;
            
          } catch (err) {
            console.log(err);
          }
      } else if( idNumberType.toString() === "26" || 
                 idNumberType.toString() === "33" ) {
        try {
          let usrDetailContent = "";
          const details: NumerologyNum = this.numbersContent.find(x => x.id === idNumberType.toString());          
          idUserNumber.forEach(number => {
            const numberDetails = details.numbers.find(x => x.id === number.toString());
            usrDetailContent += '\n' + numberDetails.content ;        
          });
          return usrDetailContent;            
      } catch (error) {
          return error.toString()
      }        
      } else if( idNumberType.toString() === "27" || 
                 idNumberType.toString() === "28"  ) {      
        try {
            let usrDetailContent = "";
            const userNum = idUserNumber.toString().split('');
            const details: NumerologyNum = this.numbersContent.find(x => x.id === idNumberType.toString());
            
            userNum.forEach(number => {
              const numberDetails = details.numbers.find(x => x.id === number.toString());
              usrDetailContent += '\n' + numberDetails.content ;
              // console.log(number.toString());              
            });
            return usrDetailContent;            
        } catch (error) {
            return error.toString()
        }
      } else {
        try {
            const details: NumerologyNum = this.numbersContent.find(x => x.id === idNumberType.toString());
            return details.numbers.find(x => x.id === idUserNumber.toString()).content;            
        } catch (error) {
            return error.toString()
        }

      }
    }

}