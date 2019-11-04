import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { User } from '../models/user';
import { Letters } from "../const/letters";
import { Pinaculo } from '../models/pinaculo';
import { NumberView } from '../models/number-view';
import { ServiceModel } from '../models/service-model';
import { NumberContentService } from './number-content.service';
import { UserInfo } from '../models/user-info';

@Injectable()
export class NumbersService {
  private letterValues = Letters;
  private numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // userInfo: User = new User();
  // nedded for getActivities

  // Date Variables
  private birthDate: string[];
  public userNumberResults = [];
  private userInfoObj: UserInfo = new UserInfo();


  private numberFuncList = [
    {
      id: 9,
      service: (userInfoObj: UserInfo) => this.getInitialLetter(userInfoObj.userName )
    },
    {
      id: 10,
      service: (userInfoObj: UserInfo) => this.getPersonalSeal(userInfoObj.userName)
    },
    {
      id: 11,
      service: (userInfoObj: UserInfo) => this.getPaternalExpectations(userInfoObj.userFLast)
    },
    {
      id: 12,
      service: (userInfoObj: UserInfo) => this.getMaternalExpectations(userInfoObj.userMLast)
    },
    {
      id: 13, // Actividades recomendadas
      service: (userInfoObj: UserInfo) => this.getActivities(userInfoObj.userName, userInfoObj.userFLast, userInfoObj.userMLast)
    },
    {
      id: 14, // Actitud
      service: (userInfoObj: UserInfo) => this.getAttitude(userInfoObj.birthDayVal, userInfoObj.birthMonthVal)
    },
    {
      id: 15, // Fe
      service: (userInfoObj: UserInfo) => this.getFaith(userInfoObj.birthDayVal, userInfoObj.birthYearArr)
    },
    {
      id: 16, // Miedo
      service: (userInfoObj: UserInfo) => this.getFear(userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 17, // Lo que se espera de los demás
      service: (userInfoObj: UserInfo) => this.getPeopleExpectations(userInfoObj.birthYearArr)
    },
    {
      id: 18, // Primera Impresión
      service: (userInfoObj: UserInfo) => this.getFirstImpression(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 19, // Posibles Padecimientos
      service: (userInfoObj: UserInfo) => this.getPossibleIll(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 20, // Actividades terapéuticas y algunos decretos
      service: (userInfoObj: UserInfo) => this.getPossibleIll(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 21, // Profesiones compatibles
      service: (userInfoObj: UserInfo) => this.getPossibleIll(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 22, // Oportunidades para mejorar tu interior
      service: (userInfoObj: UserInfo) => this.getInnerOportunities(userInfoObj.userName, userInfoObj.userLasts)
    },

    {
      id: 23, // Oportunidades para mejorar tu trato hacia los demás
      service: (userInfoObj: UserInfo) => this.getOuterOportunities(userInfoObj.userName, userInfoObj.userLasts)
    },
    {
      id: 24, // Oportunidades de crecimiento general
      service: (userInfoObj: UserInfo) => this.getGrowOpportunities(userInfoObj.userName, userInfoObj.userLasts)
    },
    {
      id: 25, // Sobreactivación
      service: (userInfoObj: UserInfo) => this.getOveractivation(userInfoObj.userName, userInfoObj.userLasts)
    },
    {
      id: 26, // Lección por aprender
      service: (userInfoObj: UserInfo) => this.getUnderActivatiom(userInfoObj.userName, userInfoObj.userLasts)
    },
    {
      id: 27, // Energías activadas
      service: (userInfoObj: UserInfo) => this.getActivatedEnergies(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 28, // Energías por activar
      service: (userInfoObj: UserInfo) => this.getMissingEnergies(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 29, // Lo no trabajado en vidas pasadas
      service: (userInfoObj: UserInfo) => this.getFaultPastLives(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 30, // Lo que se ha resisitido a trabajar en vidas pasadas
      service: (userInfoObj: UserInfo) => this.getResistencePastLives(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 31, // Promesa de vida
      service: (userInfoObj: UserInfo) => this.getLivePromise(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 32, // Número potencial
      service: (userInfoObj: UserInfo) => this.getPowNumber(userInfoObj.userName, userInfoObj.userLasts, userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 33, // Retos menores
      service: (userInfoObj: UserInfo) => this.getSmallChallenge(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 34, // Reto constante en tu vida
      service: (userInfoObj: UserInfo) => this.getConstantChallenge(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 35, // Reto en la recta final de vida
      service: (userInfoObj: UserInfo) => this.getFinalChallenge(userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    },
    {
      id: 36, // Pináculos
      service: (userInfoObj: UserInfo) => this.getPinaculos(userInfoObj.birthDayArr , userInfoObj.birthMonthArr, userInfoObj.birthYearArr)
    }
  ];


  constructor(private storageService: Storage, private numberContent: NumberContentService) {

    try {
      this.storageService.get("userInfo").then((userInfo) => {

        this.userInfoObj.userName = userInfo.userName.trim().toLowerCase();
        this.userInfoObj.userFLast = userInfo.userLast.trim().toLowerCase();
        this.userInfoObj.userMLast = userInfo.userMLast !== undefined ?
          userInfo.userMLast.trim().toLowerCase() : '';
        // console.log(userFLast, userMLast);

        this.userInfoObj.userLasts = (this.userInfoObj.userFLast + this.userInfoObj.userMLast).trim().toLowerCase();
        // console.log('User Last');
        // console.log(userLasts);

        // Date Variables
        this.birthDate = userInfo.userBirth.toString().split('-');

        this.userInfoObj.birthYearVal = this.birthDate[0];
        this.userInfoObj.birthMonthVal = this.birthDate[1];
        this.userInfoObj.birthDayVal = this.birthDate[2];

        this.userInfoObj.birthYearArr = this.birthDate[0].split('');
        this.userInfoObj.birthMonthArr = this.birthDate[1].split('');
        this.userInfoObj.birthDayArr = this.birthDate[2].split('');

      });
    } catch (error) {
      console.log(error);
    }

  }

  getPayNumbers(service: ServiceModel[]) {
    service.forEach(serv => {
      this.userNumberResults.push(this.buildUserNumber(serv));
    });

    return this.userNumberResults;
  }

  private buildUserNumber(service: ServiceModel) {
      
    const userNumber: NumberView = new NumberView();
    userNumber.id = service.id;
    userNumber.numberName = service.name;
    userNumber.userNmuber = Number(this.numberFuncList.find(x => x.id === service.id).service(this.userInfoObj)) ;    
    userNumber.content = this.numberContent.getNumberContent(service.id.toString(), userNumber.userNmuber.toString(), this.userInfoObj.userName);
    // console.log(userNumber);
    return userNumber;
  }


  // * FREE NUMBERS
  getInnerNumber(userNames: string, userLasts: string) {
    const userNameArray = userNames.match(/[aeiouáéíóúü]/ig)
      .concat(userLasts.match(/[aeiouáéíóúü]/ig));
    return this.reduceLetters(userNameArray);
  }

  getOuterNumber(userNames: string, userLast: string) {
    // const userNames = this.userInfo.userName.replace(/\s/g,'');
    const userNameArray = userNames.match(/[bcdfghjklmnpqrstvwxyz]/ig)
      .concat(userLast.match(/[bcdfghjklmnpqrstvwxyz]/ig));
    // console.log(userNameArray);
    return this.reduceLetters(userNameArray);
  }

  getQualityNumber(userNames: string, userLast: string) {
    let nameValue: number = 0;
    let passNameValue: Array<string> = [];
    (userNames + userLast).replace(/\s/g, '').split('').map((v: string) => {
      this.letterValues.forEach(l => {
        if (v === l.letter) {
          nameValue += l.value;
        }
      });
    });
    passNameValue = nameValue.toString().split('');
    // console.log(passNameValue);
    return this.reduceDate(passNameValue)
  }

  private getNumberOfDesire(birthDay: Array<string>) {
    const dayValue = this.reduceDate(birthDay);
    let numberResult = dayValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    return numberResult;
  }

  private getNumberOfPersonality(birthMonth: Array<string>) {
    const monthValue = this.reduceDate(birthMonth);
    let numberResult = monthValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    return numberResult;
  }

  private getNumberOfLife(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const yearValue = this.reduceDate(birthYear);
    const monthValue = this.reduceDate(birthMonth);
    const dayValue = this.reduceDate(birthDay);
    let numberResult = yearValue + monthValue + dayValue;
    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    return numberResult;
  }

  private getNumberOfGodGift(birthYear: Array<string>) {
    const yearValue = birthYear.slice(Math.max(birthYear.length - 2, 1));
    let numberResult: number = Number(yearValue[0].toString() + yearValue[1].toString());
    const numberRsultReduce = numberResult.toString().split('');
    numberResult = this.reduceDate(numberRsultReduce);
    return numberResult;
  }

  private getHideTalents(birthYear: Array<string>) {
    const yearValue = this.reduceDate(birthYear);
    let numberResult = yearValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    return numberResult;
  }


  // * ****************  PAY NUMBERS FROM DATE
  public getAttitude(birthDay: string, birthMonth: string) {
    const birthValue = (Number(birthDay) + Number(birthMonth)).toString().split('');
    return this.reduceDate(birthValue);
  }

  private getFaith(birthDay: string, birthYear: Array<string>) {
    const yearDigits = birthYear.slice(Math.max(birthYear.length - 2, 1))
      .reduce((a, b) => Number(a) + Number(b), 0);
    const numberResult = this.reduceDate((Number(birthDay) + yearDigits).toString().split(''));
    console.log('GET Faith');
    console.log(numberResult);
    return numberResult
  }

  private getFear(birthMonth: Array<string>, birthYear: Array<string>) {
    const birthValue = birthMonth.concat(birthYear)
      .reduce((a, b) => Number(a) + Number(b), 0)
      .toString().split('');
    const numberResult = this.reduceDate(birthValue);
    console.log('GET Fear');
    console.log(numberResult);
    return numberResult
  }


  private getPeopleExpectations(birthYear: Array<string>) {
    const numberResult = this.reduceDate(birthYear.slice(Math.max(birthYear.length - 2, 1)).concat(birthYear));
    // this.numbersList[16].userNumber = numberResult;
    console.log('GET getPeopleExpectations');
    console.log(numberResult);
    return numberResult
  }

  private getFirstImpression(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {

    let birthDayValue = birthDay.toString();
    birthDayValue = birthDayValue.replace(',', '');

    let birthMonthValue = birthMonth.toString();
    birthMonthValue = birthMonthValue.replace(',', '');

    const numberResult = this.getAttitude(birthDayValue, birthMonthValue) +
      this.getFaith(birthDayValue, birthYear) +
      this.getFear(birthMonth, birthYear) +
      this.getPeopleExpectations(birthYear)

    console.log('Inside First Impression');
    console.log(numberResult);

    return numberResult.toString().length > 0 ?
      this.reduceDate(numberResult.toString().split('')) :
      numberResult;
  }

  // This method set the value for three numbers:
  // 1) Posibles padecimeitos; 2) Actividades Terapeuticas; 3) Profesiones
  private getPossibleIll(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    return this.getDateSum(birthDay, birthMonth, birthYear);    
  }


  private getFaultPastLives(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('Fault Past Lives');

    const result = (Number(this.reduceDate(birthDay)) + Number(this.reduceDate(birthYear)) + this.getDateSum(birthDay, birthMonth, birthYear)).toString();
    let numberResult;
    if (result.length > 0) {
      numberResult = this.reduceDate(result.split(''));
    } else {
      numberResult = Number(result);
    }

    return numberResult;
  }

  private getResistencePastLives(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('Resistence Past Lives');

    const result = (this.getFaultPastLives(birthDay, birthMonth, birthYear) +
      this.getLivePromise(birthDay, birthMonth, birthYear)).toString();

    // validate length
    let numberResult;
    if (result.length > 0) {
      numberResult = this.reduceDate(result.split(''));
    } else {
      numberResult = Number(result);
    }
    return numberResult;
  }

  private getLivePromise(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {

    let birthMonthValue = birthMonth.toString();
    birthMonthValue = birthMonthValue.replace(',', '');

    // get last two year digits
    let yearDigits = birthYear.slice(Math.max(birthYear.length - 2, 1)).toString();
    yearDigits = yearDigits.replace(',', '');

    // sum results
    const result = (Number(birthMonthValue) + Number(yearDigits) + this.getDateSum(birthDay, birthMonth, birthYear)).toString();

    // validate length
    let numberResult;
    if (result.length > 0) {
      numberResult = this.reduceDate(result.split(''));
    } else {
      numberResult = Number(result);
    }

    return numberResult;
  }


  private getSmallChallenge(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const firstChallenge = Math.abs(this.getNumberOfPersonality(birthMonth) - this.getNumberOfDesire(birthDay));
    const secondChallenge = Math.abs(this.getHideTalents(birthYear) - this.getNumberOfDesire(birthDay));

    const chlallengeNumbers = [];
    chlallengeNumbers.push(firstChallenge);
    chlallengeNumbers.push(secondChallenge);
    console.log('FChallenge: ' + firstChallenge);
    console.log('SChallenge: ' + secondChallenge);

    return chlallengeNumbers;
  }

  private getConstantChallenge(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const numbersArray: Array<number> = this.getSmallChallenge(birthDay, birthMonth, birthYear);
    const numberResult = Math.abs(numbersArray[0] - numbersArray[1]);
    console.log('Constant Chlallenge: ' + numberResult);

  }

  private getFinalChallenge(birthMonth: Array<string>, birthYear: Array<string>) {
    return  Math.abs(this.getHideTalents(birthYear) - this.getNumberOfPersonality(birthMonth));
  }


  private getActivatedEnergies(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    let userEnergies = '';
    userEnergies += this.getNumberOfDesire(birthDay).toString();
    userEnergies += this.getNumberOfPersonality(birthMonth).toString();
    userEnergies += this.getHideTalents(birthYear).toString();
    userEnergies += this.getNumberOfGodGift(birthYear).toString();
    userEnergies += this.getNumberOfLife(birthDay, birthMonth, birthYear).toString();
    userEnergies = userEnergies.split('')
      .sort()
      .filter((v, i, a) => a.indexOf(v) === i)
      .join()
      .replace(/,/g, '');
    console.log(userEnergies);
    return userEnergies;
  }

  private getMissingEnergies(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const userEnegies = this.getActivatedEnergies(birthDay, birthMonth, birthYear).split('');
    const userMissingLetters = this.numbersArray.filter(n => userEnegies.indexOf(n.toString()) === -1)
      .join()
      .replace(/,/g, '');
    console.log(userMissingLetters);
    return userMissingLetters;
  }

  getPinaculos(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {

    // delimiting periods
    const firstPeriod = 36 - Number(this.getNumberOfLife(birthDay, birthMonth, birthYear));
    const secondPeriod = firstPeriod + 9;
    const thirdPeriod = secondPeriod + 9;
    const fourthPeriod = thirdPeriod + 1;

    // calculate period values
    const firstPeriodVal = this.reduceDate((this.getNumberOfDesire(birthDay) +
      this.getNumberOfPersonality(birthMonth)).toString().split(''));
    const secondPeriodVal = this.reduceDate((this.getNumberOfDesire(birthDay) +
      this.getHideTalents(birthYear)).toString().split(''));
    const thirdPeriodVal = this.reduceDate((firstPeriodVal + secondPeriodVal).toString().split(''));
    const fourthPeriodVal = this.reduceDate((this.getNumberOfPersonality(birthMonth) +
      this.getHideTalents(birthYear)).toString().split(''));

    const pinaculoObj: Pinaculo[] = [
      {
        periodLimit: firstPeriod,
        periodValue: firstPeriodVal
      },
      {
        periodLimit: secondPeriod,
        periodValue: secondPeriodVal
      },
      {
        periodLimit: thirdPeriod,
        periodValue: thirdPeriodVal
      },
      {
        periodLimit: fourthPeriod,
        periodValue: fourthPeriodVal
      }
    ];
    console.log(pinaculoObj);
    console.log(JSON.stringify(pinaculoObj));
    return pinaculoObj;
  }

  // * ****************  PAY NUMBERS FROM NAME

  private getInitialLetter(userName: string) {
    const initial = userName.substr(0, 1).toLowerCase();
    return this.letterValues.find(l => l.letter === initial).value;
  }

  private getPersonalSeal(userNames: string) {
    console.log('getPersonalSeal');
    const userNameArray = userNames.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig);
    return this.reduceLetters(userNameArray);
  }

  private getPaternalExpectations(userLast: string) {
    console.log('Paternal Expectations');
    const userNameArray = userLast.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig);
    return this.reduceLetters(userNameArray);
  }

  private getMaternalExpectations(userLast: string) {
    console.log('Maternal Expectations');
    let userNameArray = [];
    userNameArray = userLast.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig);
    return this.reduceLetters(userNameArray);
  }


  private getActivities(userNames: string, userFLast: string, userMLast: string) {

    let lettersArray = new Array<string>();
    const namesArray = userNames.split(" ");
    const lastsArray = userFLast.split(" ");
    const lastsMArray = userMLast.split(" ");
    const nameLastArray = namesArray.concat(lastsArray).concat(lastsMArray);

    nameLastArray.forEach(n => {
      const initialLetter = n.substr(0, 1);
      lettersArray.push(initialLetter);
    });

    console.log('getActivities');
    console.log(nameLastArray);
    return this.reduceLetters(lettersArray);
  }

  private getInnerOportunities(userNames: string, userLasts: string) {
    const userNameArray = userNames.match(/[aeiou]/ig)
      .concat(userLasts.match(/[aeiou]/ig));

    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0]).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue - lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    return this.reduceDate(numberResultArray);

  }

  private getOuterOportunities(userNames: string, userLasts: string) {
    const userNameArray = userNames.match(/[bcdfghjklmnpqrstvwxyz]/ig)
      .concat(userLasts.match(/[bcdfghjklmnpqrstvwxyz]/ig));
    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0].toLowerCase()).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue - lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    return this.reduceDate(numberResultArray);

  }


  private getGrowOpportunities(userNames: string, userLasts: string) {
    console.log('Inside getGrowOpportunities');
    const userNameArray = userNames.match(/[aeiou]/ig)
      .concat(userLasts.match(/[aeiou]/ig));
    console.log(userNameArray);
    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0]).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue + lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    return this.reduceDate(numberResultArray);

  }


  private getOveractivation(userNames: string, userLasts: string) {
    let userNumner = 0;
    // Get name letters
    const userLetters = (userNames.replace(/\s/g, "") + userLasts.replace(/\s/g, "")).split('').sort(this.caseInsensitiveComp);
    // build letter Object
    const count = new Object();
    const userNumberarray = [];
    userLetters.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
    Object.entries(count).forEach(element => {
      const letterObject = {
        letter: element[0],
        val: element[1]
      }
      userNumberarray.push(letterObject);
    });

    let orderArray = userNumberarray.sort((a, b) => a.val < b.val ? -1 : 1).reverse();
    // rule of three
    const overActivationNum = Math.round(((orderArray[0].val * 100) / userLetters.length));
    if (orderArray[0].val === 5) {
      if (overActivationNum > 50) {
        // HAS over activation
        console.log('OVER FROM  5');
        userNumner = Number(orderArray.filter(x => x.val === orderArray[0].val)
          .map(x => x.val)
          .join()
          .replace(/,/g, ''));
        console.log(userNumner);
      } else {
        // NOT HAS
        console.log('NOT OVER  5');
      }
    } else {
      if (overActivationNum > 28) {
        // HAS over activation
        console.log('OVER FROM NOT 5');
        userNumner = Number(orderArray.filter(x => x.val === orderArray[0].val)
          .map(x => x.val)
          .join()
          .replace(/,/g, ''));
        console.log(userNumner);
      } else {
        // NOT HAS
        console.log('NOT OVER NOT 5');
      }
    }
    console.log('PERCENT: ' + overActivationNum);
    return userNumner;
  }

  private getUnderActivatiom(userNames: string, userLasts: string) {
    // Get name letters
    console.log('Get Under Activation');
    const userLetters = (userNames.replace(/\s/g, "") + userLasts.replace(/\s/g, ""))
      .split('')
      .sort(this.caseInsensitiveComp)
      .filter((v, i, a) => a.indexOf(v) === i);
    const userNumbers = this.letterValues.filter(r => userLetters.indexOf(r.letter) !== -1)
      .map(s => s.value)
      .sort()
      .filter((v, i, a) => a.indexOf(v) === i);
    const userMissingLetters = this.numbersArray.filter(n => userNumbers.indexOf(n) === -1);
    console.log(userMissingLetters);
    return userMissingLetters;
  }

  private getPowNumber(userNames: string, userLast: string, birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('getPowNumber');
    // new definition
    const result = this.reduceDate((this.getQualityNumber(userNames, userLast) +
      this.getNumberOfLife(birthDay, birthMonth, birthYear))
      .toString().split(''));
    // set number
    return result;
  }


  // * REDUCERS  & HELPERS ***********************                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         general reducers
  private reduceLetters(arrayLetters: Array<string>): number {
    let nameValue: number = 0;
    let passNameValue: Array<string> = [];
    console.log(arrayLetters);
    arrayLetters.map(v => {
      this.letterValues.forEach(l => {
        if (v === l.letter) {
          nameValue += l.value;
        }
      })
    });
    passNameValue = nameValue.toString().split('');
    return this.reduceDate(passNameValue);
  }

  private reduceDate(arrayDate: Array<string>): number {
    let dateValue = 0;
    let yearLength = arrayDate.length;

    do {
      arrayDate.forEach(v => {
        dateValue += Number(v);
      });
      if (String(dateValue).length > 1) {
        const stringYear = String(dateValue);
        arrayDate = stringYear.split('');
        yearLength = arrayDate.length;
        dateValue = 0;
      } else {
        yearLength = 0;
      }
    } while (yearLength > 1);
    return dateValue;
  }

  private getDateSum(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>): number {
    const dateArray = birthDay.concat(birthMonth).concat(birthYear);
    return this.reduceDate(dateArray);
  }



  private caseInsensitiveComp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
  }



}