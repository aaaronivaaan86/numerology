import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TooltipController } from 'ionic-tooltips';

import { ServicesPage } from '../services/services';
import { Pinaculo } from '../../shared/models/pinaculo';

import { User } from '../../shared/models/user';
import { DetailsPage } from '../details/details';

import { Letters } from '../../shared/const/letters';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  userInfo: User = new User();
  private numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public profileDescription = 'Los siguientes números te muestran herramientas con las que cuentas y que pueden ayudarte a mejorar aspectos de tu vida.';

  public numbersList = [
    {
      id: 1,
      name: 'Tu interior',
      imgsrc: 'assets/icon/tu_interior.svg',
      userNumber: 0
    },
    {
      id: 2,
      name: 'Cómo te ven los demás',
      imgsrc: 'assets/icon/te_ven_demas.svg',
      userNumber: 0
    },
    {
      id: 3,
      name: 'Cualidades que se adquirirán con el tiempo',
      imgsrc: 'assets/icon/cualidades_tiempo.svg',
      userNumber: 0
    },
    {
      id: 4,
      name: 'Anhelos',
      imgsrc: 'assets/icon/anhelos.svg',
      userNumber: 0
    },
    {
      id: 5,
      name: 'Áreas de oportunidad',
      imgsrc: 'assets/icon/areas_oportunidad.svg',
      userNumber: 0
    },
    {
      id: 6,
      name: 'Tus fortalezas',
      imgsrc: 'assets/icon/fortalezas.svg',
      userNumber: 0
    },
    {
      id: 7,
      name: 'Talentos Ocultos',
      imgsrc: 'assets/icon/talentos_ocultos.svg',
      userNumber: 0
    },
    {
      id: 8,
      name: 'Misión de Vida',
      imgsrc: 'assets/icon/mision.svg',
      userNumber: 0
    },
    // Begin Pay numbers
    {
      id: 9,
      name: 'Inicial de tu nombre',
      imgsrc: 'assets/icon/inicial_nombre.svg',
      userNumber: 0
    },
    {
      id: 10,
      name: 'Sello personal',
      imgsrc: 'assets/icon/sello_personal.svg',
      userNumber: 0
    },
    {
      id: 11,
      name: 'Expectativas paternas',
      imgsrc: 'assets/icon/expectativas_paternas.svg',
      userNumber: 0
    },
    {
      id: 12,
      name: 'Expectativas maternas',
      imgsrc: 'assets/icon/expectativas_maternas.svg',
      userNumber: 0
    },
    {
      id: 13,
      name: 'Actividades recomendadas',
      imgsrc: 'assets/icon/actividades_recomendadas.svg',
      userNumber: 0
    },
    {
      id: 14,
      name: 'Actitud',
      imgsrc: 'assets/icon/actitud.svg',
      userNumber: 0
    },
    {
      id: 15,
      name: 'Fe',
      imgsrc: 'assets/icon/fe.svg',
      userNumber: 0
    },
    {
      id: 16,
      name: 'Miedo',
      imgsrc: 'assets/icon/miedo.svg',
      userNumber: 0
    },
    {
      id: 17,
      name: 'Lo que se espera de los demás',
      imgsrc: 'assets/icon/esperan_demas.svg',
      userNumber: 0
    },
    {
      id: 18,
      name: 'Primera Impresión',
      imgsrc: 'assets/icon/primera_impresion.svg',
      userNumber: 0
    },
    {
      id: 19,
      name: 'Posibles Padecimientos',
      imgsrc: 'assets/icon/padecimientos.svg',
      userNumber: 0
    },
    {
      id: 20, 
      name: 'Actividades terapéuticas y algunos decretos',
      imgsrc: 'assets/icon/actividades_terapeuticas.svg',
      userNumber: 0
    },
    {
      id: 21,
      name: 'Profesiones compatibles',
      imgsrc: 'assets/icon/profesoines_compatibles.svg',
      userNumber: 0
    },
    {
      id: 22,
      name: 'Oportunidades para mejorar tu interior',
      imgsrc: 'assets/icon/mejorar_interior.svg',
      userNumber: 0
    },
    {
      id: 23,
      name: 'Oportunidades para mejorar tu trato hacia los demás',
      imgsrc: 'assets/icon/mejorar_trato_demas.svg',
      userNumber: 0
    },
    {
      id: 24,
      name: 'Oportunidades de crecimiento general',
      imgsrc: 'assets/icon/crecimiento_general.svg',
      userNumber: 0
    },
    {
      id: 25,
      name: 'Sobreactivación',
      imgsrc: 'assets/icon/sobreactivacion.svg',
      userNumber: 0
    },
    {
      id: 26,
      name: 'Lección por aprender',
      imgsrc: 'assets/icon/leccion_aprender.svg',
      userNumber: 0
    },
    {
      id: 27,
      name: 'Energías activadas',
      imgsrc: 'assets/imgs/water.svg',
      userNumber: 0
    },
    {
      id: 28,
      name: 'Energías por activar',
      imgsrc: 'assets/icon/energias_activar.svg',
      userNumber: 0
    },
    {
      id: 29,
      name: 'Lo no trabajado en vidas pasadas',
      imgsrc: 'assets/icon/no_trabajado_vidas_pasadas.svg',
      userNumber: 0
    },
    {
      id: 30,
      name: 'Lo que se ha resisitido a trabajar en vidas pasadas',
      imgsrc: 'assets/icon/resistido_trabajar.svg',
      userNumber: 0
    },
    {
      id: 31,
      name: 'Promesa de vida',
      imgsrc: 'assets/icon/promsesa_vida.svg',
      userNumber: 0
    },
    {
      id: 32,
      name: 'Número potencial',
      imgsrc: 'assets/icon/numero_potencial.svg',
      userNumber: 0
    },
    {
      id: 33,
      name: 'Retos menores',
      imgsrc: 'assets/icon/retos_menores.svg',
      userNumber: 0
    },
    {
      id: 34,
      name: 'Reto constante en tu vida',
      imgsrc: 'assets/icon/reto_constante.svg',
      userNumber: 0
    },
    {
      id: 35,
      name: 'Reto en la recta final de vida',
      imgsrc: 'assets/icon/reto_final_vida.svg',
      userNumber: 0
    },
    {
      id: 36,
      name: 'Pináculos',
      imgsrc: 'assets/icon/evolucion_vida.svg',
      userNumber: 0
    }
    // TODO: Lección por aprender(26) == 36: oportunidades de crecimiento y evolución a lo largo de tu vida (pináculos)

  ];



  letterValues = Letters;
  // public letterValues = [
  //   {
  //     id: 1,
  //     letter: 'a',
  //     value: 1
  //   },
  //   {
  //     id: 2,
  //     letter: 'b',
  //     value: 2
  //   },
  //   {
  //     id: 3,
  //     letter: 'c',
  //     value: 3
  //   },
  //   {
  //     id: 4,
  //     letter: 'd',
  //     value: 4
  //   },
  //   {
  //     id: 5,
  //     letter: 'e',
  //     value: 5
  //   },
  //   {
  //     id: 6,
  //     letter: 'f',
  //     value: 6
  //   },
  //   {
  //     id: 7,
  //     letter: 'g',
  //     value: 7
  //   },
  //   {
  //     id: 8,
  //     letter: 'h',
  //     value: 8
  //   },
  //   {
  //     id: 9,
  //     letter: 'i',
  //     value: 9
  //   },
  //   {
  //     id: 10,
  //     letter: 'j',
  //     value: 1
  //   },
  //   {
  //     id: 11,
  //     letter: 'k',
  //     value: 2
  //   },
  //   {
  //     id: 12,
  //     letter: 'l',
  //     value: 3
  //   },
  //   {
  //     id: 13,
  //     letter: 'm',
  //     value: 4
  //   },
  //   {
  //     id: 14,
  //     letter: 'n',
  //     value: 5
  //   },
  //   {
  //     id: 15,
  //     letter: 'o',
  //     value: 6
  //   },
  //   {
  //     id: 16,
  //     letter: 'p',
  //     value: 7
  //   },
  //   {
  //     id: 17,
  //     letter: 'q',
  //     value: 8
  //   },
  //   {
  //     id: 18,
  //     letter: 'r',
  //     value: 9
  //   },
  //   {
  //     id: 19,
  //     letter: 's',
  //     value: 1
  //   },
  //   {
  //     id: 20,
  //     letter: 't',
  //     value: 2
  //   },
  //   {
  //     id: 21,
  //     letter: 'u',
  //     value: 3
  //   },
  //   {
  //     id: 22,
  //     letter: 'v',
  //     value: 4
  //   },
  //   {
  //     id: 23,
  //     letter: 'w',
  //     value: 5
  //   },
  //   {
  //     id: 24,
  //     letter: 'x',
  //     value: 6
  //   },
  //   {
  //     id: 25,
  //     letter: 'y',
  //     value: 7
  //   },
  //   {
  //     id: 26,
  //     letter: 'z',
  //     value: 8
  //   },
  //   {
  //     id: 27,
  //     letter: 'á',
  //     value: 1
  //   },
  //   {
  //     id: 28,
  //     letter: 'é',
  //     value: 5
  //   },
  //   {
  //     id: 29,
  //     letter: 'í',
  //     value: 9
  //   },
  //   {
  //     id: 30,
  //     letter: 'ó',
  //     value: 6
  //   },
  //   {
  //     id: 31,
  //     letter: 'ú',
  //     value: 3
  //   },
  //   {
  //     id: 32,
  //     letter: 'ü',
  //     value: 3
  //   }
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tooltipCtrl: TooltipController) {
    this.userInfo = this.navParams.get('user');
    // console.log(this.userInfo);

    this.getUserNumbers();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ResultsPage');
  }

  goServices() {
    this.navCtrl.push(ServicesPage);
  }

  getUserNumbers() {    
    // Name variables
    const userNames = this.userInfo.userName.trim().replace(/\s/g,'').toLowerCase();
    // console.log('User Names');
    // console.log(userNames);


    // nedded for getActivities
    const userNamesSpaces = this.userInfo.userName.trim().toLowerCase();
    const userFLast = this.userInfo.userLast.trim().toLowerCase();
    let userMLast = this.userInfo.userMLast !== undefined ?
                    this.userInfo.userMLast.trim().toLowerCase() :  '';

    // console.log('User MF LAST');
    // console.log(userFLast, userMLast);

    const userLasts =  (userFLast + userMLast).trim().toLowerCase();  
    // console.log('User Last');
    // console.log(userLasts);

    // Date Variables
    const birthDate = this.userInfo.userBirth.toString().split('-');
    const birthYear = birthDate[0].split('');
    const birthMonth = birthDate[1].split('');
    const birthDay = birthDate[2].split('');

    // * *************** FREE NUMBERS
    // Names numbers
    this.getInnerNumber(userNames, userLasts);
    this.getOuterNumber(userNames, userLasts);
    this.getQualityNumber(userNames, userLasts);

    // Date numbers    
    this.getNumberOfDesire(birthDay);
    this.getNumberOfPersonality(birthMonth);
    this.getNumberOfLife(birthDay, birthMonth, birthYear);
    this.getNumberOfGodGift(birthYear); // Tus Fortalezas
    this.getHideTalents(birthYear); // Mision de vida

    // * ***************** pay numbers
    this.getAttitude(birthDate[2], birthDate[1]);
    this.getFaith(birthDate[2], birthYear);
    this.getFear(birthMonth, birthYear);
    this.getPeopleExpectations(birthYear)
    this.getFirstImpression(birthDay, birthMonth, birthYear);
    this.getPossibleIll(birthDay, birthMonth, birthYear);

    this.getInitialLetter(userNames);
    this.getPersonalSeal(userNames);
    this.getPaternalExpectations(userFLast);
    this.getMaternalExpectations(userMLast);
    this.getActivities(userNamesSpaces, userFLast, userMLast);
    this.getInnerOportunities(userNames, userLasts);
    this.getOuterOportunities(userNames, userLasts);
    this.getGrowOpportunities(userNames, userLasts);
    this.getFaultPastLives(birthDay, birthMonth, birthYear);
    this.getResistencePastLives(birthDay, birthMonth, birthYear);
    this.getLivePromise(birthDay, birthMonth, birthYear);

    this.getSmallChallenge(birthDay, birthMonth, birthYear);
    this.getConstantChallenge(birthDay, birthMonth, birthYear);
    this.getFinalChallenge(birthMonth, birthYear);

    this.getPowNumber(userNames, userLasts, birthDay, birthMonth, birthYear);

    this.getOveractivation(userNames, userLasts);
    this.getUnderActivatiom(userNames, userLasts);
    this.getActivatedEnergies(birthDay, birthMonth, birthYear);
    this.getMissingEnergies(birthDay, birthMonth, birthYear);

    this.getPinaculos(birthDay, birthMonth, birthYear);

  }

  // *************** Get Names Numbers
  getInnerNumber(userNames: string, userLasts: string) {
    const userNameArray = userNames.match(/[aeiouáéíóúü]/ig)
    .concat(userLasts.match(/[aeiouáéíóúü]/ig));
    this.numbersList[0].userNumber = this.reduceLetters(userNameArray);
  }

  getOuterNumber(userNames: string, userLast: string) {
    // const userNames = this.userInfo.userName.replace(/\s/g,'');
    const userNameArray = userNames.match(/[bcdfghjklmnpqrstvwxyz]/ig)
    .concat(userLast.match(/[bcdfghjklmnpqrstvwxyz]/ig));
    // console.log(userNameArray);
    this.numbersList[1].userNumber = this.reduceLetters(userNameArray);
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
    this.numbersList[2].userNumber = this.reduceDate(passNameValue);
    return this.reduceDate(passNameValue)
  }

  // ****************  Get Date Numbers
  getNumberOfDesire(birthDay: Array<string>) {
    const dayValue = this.reduceDate(birthDay);
    let numberResult = dayValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    this.numbersList[3].userNumber = numberResult;
    return numberResult;
  }


  getNumberOfPersonality(birthMonth: Array<string>) {
    const monthValue = this.reduceDate(birthMonth);
    let numberResult = monthValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    this.numbersList[4].userNumber = numberResult;
    return numberResult;
  }

  getNumberOfGodGift(birthYear: Array<string>) {
    const yearValue = birthYear.slice(Math.max(birthYear.length - 2, 1));
    let numberResult: number = Number(yearValue[0].toString() + yearValue[1].toString());
    const numberRsultReduce = numberResult.toString().split('');
    numberResult = this.reduceDate(numberRsultReduce);
    this.numbersList[5].userNumber = numberResult;
    return numberResult;
  }

  getHideTalents(birthYear: Array<string>) {
    const yearValue = this.reduceDate(birthYear);
    let numberResult = yearValue;

    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    this.numbersList[6].userNumber = numberResult;
    return numberResult;
  }

  getNumberOfLife(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const yearValue = this.reduceDate(birthYear);
    const monthValue = this.reduceDate(birthMonth);
    const dayValue = this.reduceDate(birthDay);
    let numberResult = yearValue + monthValue + dayValue;
    if (numberResult.toString().length > 0) {
      const numberRsultReduce = numberResult.toString().split('');
      numberResult = this.reduceDate(numberRsultReduce);
    }
    this.numbersList[7].userNumber = numberResult;
    return numberResult;
  }


  // ? Payment numbers
  // Name numbers
  getInitialLetter(userName: string) {
    const initial = userName.substr(0, 1).toLowerCase();
    const initialValue = this.letterValues.find(l => l.letter === initial);
    this.numbersList.find(n => n.id === 9).userNumber = initialValue.value;
  }

  getPersonalSeal(userNames: string) {
    console.log('getPersonalSeal');
    const userNameArray = userNames.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig);
    this.numbersList.find(n => n.id === 10).userNumber = this.reduceLetters(userNameArray);
  }

  getPaternalExpectations(userLast: string) {
    console.log('Paternal Expectations');
    const userNameArray = userLast.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig);
    this.numbersList.find(n => n.id === 11).userNumber = this.reduceLetters(userNameArray);
  }

  getMaternalExpectations(userLast: string) {
    console.log('Maternal Expectations');
    let userNameArray = [];
    userNameArray = userLast.match(/[aeioubcdfghjklmnpqrstvwxyzáéíóúüï]/ig) ;   
    this.numbersList.find(n => n.id === 12).userNumber = this.reduceLetters(userNameArray);
  }

  getActivities(userNames: string, userFLast: string, userMLast: string) {
    
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

  getInnerOportunities(userNames: string, userLasts: string) {
    const userNameArray = userNames.match(/[aeiou]/ig)
      .concat(userLasts.match(/[aeiou]/ig));

    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0]).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue - lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    numberResult = this.reduceDate(numberResultArray);
    this.numbersList[21].userNumber = numberResult;

  }

  getOuterOportunities(userNames: string, userLasts: string) {
    console.log('Inside get Outter Oportunities');
    const userNameArray = userNames.match(/[bcdfghjklmnpqrstvwxyz]/ig)
      .concat(userLasts.match(/[bcdfghjklmnpqrstvwxyz]/ig));
    console.log(userNameArray);
    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0].toLowerCase()).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue - lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    numberResult = this.reduceDate(numberResultArray);
    console.log(numberResult);
    this.numbersList[22].userNumber = numberResult;
  }

  getGrowOpportunities(userNames: string, userLasts: string) {
    console.log('Inside getGrowOpportunities');
    const userNameArray = userNames.match(/[aeiou]/ig)
      .concat(userLasts.match(/[aeiou]/ig));
    console.log(userNameArray);
    const firstLetterValue = this.letterValues.find(l => l.letter == userNameArray[0]).value;
    const lastLetterValue = this.letterValues.find(l => l.letter == userNameArray[userNameArray.length - 1]).value;
    let numberResult = Math.abs(firstLetterValue + lastLetterValue);
    let numberResultArray = numberResult.toString().split('');
    numberResult = this.reduceDate(numberResultArray);
    console.log(numberResult);
    this.numbersList[23].userNumber = numberResult;
  }


  getOveractivation(userNames: string, userLasts: string) {
    let userNumner = 0;
    // Get name letters
    const userLetters = (userNames.replace(/\s/g, "") + userLasts.replace(/\s/g, "")).split('').sort(this.caseInsensitiveComp) ;

    // build letter Object
    const  count = new Object();
    const userNumberarray =  [];

    userLetters.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    console.log(Object.entries(count));

    Object.entries(count).forEach(element => {
      const letterObject = {
        letter: element[0],
        val: element[1]
      }
      userNumberarray.push(letterObject);
    });

    let orderArray = userNumberarray.sort( (a, b) =>  a.val < b.val ? -1 : 1 ).reverse();
    console.log(orderArray);
    // rule of three
    const overActivationNum = Math.round(((orderArray[0].val * 100) / userLetters.length));
    if ( orderArray[0].val === 5 ) {
      if (overActivationNum  > 50) {
        // HAS over activation
        console.log('OVER FROM  5');
        userNumner = Number (orderArray.filter(x => x.val === orderArray[0].val)
                                      .map(x => x.val)
                                      .join()
                                      .replace(/,/g, ''));
        console.log(userNumner);
      } else {
        // NOT HAS
        console.log('NOT OVER  5');
      }
    } else {
      if (overActivationNum  > 28) {
        // HAS over activation
        console.log('OVER FROM NOT 5');
        userNumner = Number (orderArray.filter(x => x.val === orderArray[0].val)
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
    this.numbersList[24].userNumber = userNumner;
  }

  getUnderActivatiom(userNames: string, userLasts: string) {
        // Get name letters
        console.log('Get Under Activation');        
        const userLetters = (userNames.replace(/\s/g, "") + userLasts.replace(/\s/g, ""))
                            .split('')
                            .sort(this.caseInsensitiveComp)
                            .filter((v, i, a) => a.indexOf(v) === i);
        console.log(userLetters);
        const userNumbers = this.letterValues.filter( r => userLetters.indexOf(r.letter) !== -1)
                                          .map(s => s.value)
                                          .sort()
                                          .filter((v, i, a) => a.indexOf(v) === i);
        console.log(userNumbers);
        const userMissingLetters = this.numbersArray.filter(n => userNumbers.indexOf(n) === -1);
        console.log(userMissingLetters);

        this.numbersList[25].userNumber = userMissingLetters[0];
  }

  // * ****************  PAY NUMBERS FROM DATE
  getAttitude(birthDay: string, birthMonth: string) {
    console.log('GET ATTITUDE');
    const birthValue = (Number(birthDay) + Number(birthMonth)).toString().split('');
    const numberResult = this.reduceDate(birthValue);
    this.numbersList[13].userNumber = numberResult;
    console.log(numberResult);
    return numberResult
  }

  getFaith(birthDay: string, birthYear: Array<string>) {
    console.log('GET Faith');
    const yearDigits = birthYear.slice(Math.max(birthYear.length - 2, 1))
      .reduce((a, b) => Number(a) + Number(b), 0);
    const sumDayYearDigits = (Number(birthDay) + yearDigits).toString().split('');
    const numberResult = this.reduceDate(sumDayYearDigits);
    this.numbersList[14].userNumber = numberResult;
    console.log(numberResult);
    return numberResult
  }

  getFear(birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('GET Fear');
    const birthValue = birthMonth.concat(birthYear)
      .reduce((a, b) => Number(a) + Number(b), 0)
      .toString().split('');
    const numberResult = this.reduceDate(birthValue);
    this.numbersList[15].userNumber = numberResult;
    console.log(numberResult);
    return numberResult
  }

  getPeopleExpectations(birthYear: Array<string>) {
    console.log('GET getPeopleExpectations');
    const yearDigits = birthYear.slice(Math.max(birthYear.length - 2, 1)).concat(birthYear);
    const numberResult = this.reduceDate(yearDigits);
    this.numbersList[16].userNumber = numberResult;
    console.log(numberResult);
    return numberResult
  }

  getFirstImpression(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('Inside First Impression');

    let birthDayValue = birthDay.toString();
    birthDayValue = birthDayValue.replace(',', '');

    let birthMonthValue = birthMonth.toString();
    birthMonthValue = birthMonthValue.replace(',', '');

    const numberResult = this.getAttitude(birthDayValue, birthMonthValue) +
                        this.getFaith(birthDayValue, birthYear) +
                        this.getFear(birthMonth, birthYear) + 
                        this.getPeopleExpectations(birthYear)

    numberResult.toString().length > 0 ?
      this.numbersList[17].userNumber = this.reduceDate(numberResult.toString().split('')) :
      this.numbersList[17].userNumber = numberResult;

  }

  // This method set the value for three numbers:
  // 1) Posibles padecimeitos; 2) Actividades Terapeuticas; 3) Profesiones
  getPossibleIll(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('Inside Possible Ill');
    console.log(this.getDateSum(birthDay, birthMonth, birthYear));
    const numberResult = this.getDateSum(birthDay, birthMonth, birthYear);
    this.numbersList[18].userNumber = numberResult;
    this.numbersList[19].userNumber = numberResult;
    this.numbersList[20].userNumber = numberResult;

  }


  getFaultPastLives(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('Fault Past Lives');

    const result = (Number(this.reduceDate(birthDay)) + Number(this.reduceDate(birthYear)) + this.getDateSum(birthDay, birthMonth, birthYear)).toString();
    let numberResult;
    if (result.length > 0) {
      numberResult = this.reduceDate(result.split(''));
    } else {
      numberResult = Number(result);
    }

    this.numbersList[28].userNumber = numberResult;
    return numberResult;
  }

  getResistencePastLives(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
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

    // set number
    this.numbersList[29].userNumber = numberResult;
    return numberResult;
  }


  getLivePromise(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {

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
    // set number
    this.numbersList[30].userNumber = numberResult;
    return numberResult;
  }

  getSmallChallenge(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const firstChallenge = Math.abs(this.getNumberOfPersonality(birthMonth) - this.getNumberOfDesire(birthDay));
    const secondChallenge = Math.abs(this.getHideTalents(birthYear) -   this.getNumberOfDesire(birthDay));
    this.numbersList[32].userNumber = firstChallenge;

    const chlallengeNumbers = [];
    chlallengeNumbers.push(firstChallenge);
    chlallengeNumbers.push(secondChallenge);
    console.log('FChallenge: ' + firstChallenge);
    console.log('SChallenge: ' + secondChallenge);
    return chlallengeNumbers;
  }

  getConstantChallenge(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const numbersArray: Array<number> = this.getSmallChallenge(birthDay, birthMonth, birthYear);
    const numberResult = Math.abs(numbersArray[0] - numbersArray[1]);
    console.log('Constant Chlallenge: ' + numberResult);
    this.numbersList[33].userNumber = numberResult;

  }

  getFinalChallenge(birthMonth: Array<string>, birthYear: Array<string>) {
    const numberResult = Math.abs(this.getHideTalents(birthYear) - this.getNumberOfPersonality(birthMonth));
    console.log('Final Challenge: ' + numberResult);
    this.numbersList[34].userNumber = numberResult;

  }


  getActivatedEnergies(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
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
    this.numbersList[26].userNumber = Number(userEnergies);
    return userEnergies;
  }

  getMissingEnergies(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    const userEnegies = this.getActivatedEnergies(birthDay, birthMonth, birthYear).split('');
    const userMissingLetters = this.numbersArray.filter(n => userEnegies.indexOf(n.toString()) === -1)
                                            .join()
                                            .replace(/,/g, '');
    this.numbersList[27].userNumber = Number(userMissingLetters);
    console.log(userMissingLetters);
  }

  getPinaculos(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {

    // delimiting periods
    const firstPeriod = 36 - Number(this.getNumberOfLife(birthDay ,birthMonth ,birthYear));
    const secondPeriod = firstPeriod + 9;
    const thirdPeriod = secondPeriod + 9;
    const fourthPeriod = thirdPeriod + 1;

    // calculate period values
    const firstPeriodVal =  this.reduceDate((this.getNumberOfDesire(birthDay) + 
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
  }




  // * COMBINED NUMBERS (DATE-NAME)
  getPowNumber(  userNames: string, userLast: string, birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>) {
    console.log('getPowNumber');
    // new definition
    const result = this.reduceDate( ( this.getQualityNumber(userNames, userLast) + 
                                      this.getNumberOfLife(birthDay, birthMonth, birthYear))
                                      .toString().split(''));
    // set number
    this.numbersList[31].userNumber = result;
  }

  // * REDUCERS  & HELPERS ***********************                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         general reducers
  reduceLetters(arrayLetters: Array<string>): number {
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

  reduceDate(arrayDate: Array<string>): number {
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

  getDateSum(birthDay: Array<string>, birthMonth: Array<string>, birthYear: Array<string>): number {
    const dateArray = birthDay.concat(birthMonth).concat(birthYear);
    return this.reduceDate(dateArray);
  }



   caseInsensitiveComp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
  }
  // * NAVIGATION
  goDetails(idNumberType: string, numberName: string, userNumber: string) {
    this.navCtrl.push(DetailsPage, { idNumber: idNumberType, usrNumber: userNumber, numberName: numberName });
  }


}
