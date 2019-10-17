import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { User } from '../../shared/models/user';
import { ResultsPage } from '../results/results';
import { TutorialPage } from '../tutorial/tutorial';
import { LegalPage } from '../legal/legal';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // public note: Note = new Note();
  newUser: User = new User();
  contactList: User[] = new Array<User>();
  contact: User;

  addContact = false;
  editContact = false;
  showErrorMsg = false;

  gridHeaders = [
    {
      id: 1,
      title: 'Contact Name'
    },
    {
      id: 2,
      title: 'Ver'
    },
    {
      id: 3,
      title: 'Editar'
    },
    {
      id: 4,
      title: 'Descartar'
    },
  ];

  private toastOptions = {
    message: 'Se ha añadido tu coincidencia',
    duration: 3000
  }

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private http: HttpClient,
    private view: ViewController,
    private storageService: Storage,
    private toast: ToastController) {

    this.addContact = this.navParams.get('addContact');
    this.editContact = this.navParams.get('editContact');
    this.contact = this.navParams.get('contact');

    console.log(this.addContact);
    this.getUserInfo();
    this.getContactList();
    this.setEditContact(this.editContact);
  }

  // User Info
  getUserInfo() {
    if (!this.addContact && !this.editContact) {
      this.storageService.get("userInfo").then((data) => {
        console.log(data);
        if (data !== null) {
          this.newUser = data;
        }
      });
    }
  }

  saveData() {
    // Validate State
    if (!this.isValidState()) {
      this.toastOptions.message = 'Por favor ingresa todos los datos';
      this.toast.create(this.toastOptions).present();
      return;
    }
    this.newUser.idUser = Date.now();
    this.storageService.set("userInfo", this.newUser);
  }

  goResult() {
    if (this.isValidState()) {      
      console.log(this.newUser);
      this.showErrorMsg = false;
      this.saveData();
      this.navCtrl.push(ResultsPage, { user: this.newUser });
    } else {
      this.showErrorMsg = true;
    }

  }

  goTutorial() {
    this.navCtrl.push(TutorialPage);
  }

  goLegal() {
    this.navCtrl.push(LegalPage);
  }



  // Contacts
  getContactList() {
    if (this.addContaact || this.editContact) {
      this.storageService.get("contactList").then((data) => {
        this.contactList = data;
        console.log(this.contactList);
      });
    };
  }

  addContaact() {

    // Validate State
    if (!this.isValidState()) {
      this.toastOptions.message = 'Por favor ingresa todos los campos';
      this.toast.create(this.toastOptions).present();
      return;
    }

    // Case contact list is empty
    if (this.contactList === null) {
      const newContactList: User[] = new Array<User>();
      this.newUser.idUser = Date.now();
      newContactList.push(this.newUser);
      this.storageService.set('contactList', newContactList);
      this.toast.create(this.toastOptions).present();
      this.view.dismiss();
    } else {
      if(this.contactList.length === 4) {
        this.toastOptions.message = 'Tu lista de coincidencias está llena';
        this.toast.create(this.toastOptions).present();
      } else {
        // Case contact list has been fill
        this.contactList.length === 4
        this.newUser.idUser = Date.now();
        this.contactList.push(this.newUser);
        this.storageService.set('contactList', this.contactList);
        this.toast.create(this.toastOptions).present();
        this.view.dismiss();
      }



    }
  }

  setEditContact(editStatus: boolean) {
    if (editStatus) {
      this.newUser = this.contact;
    }
  }

  contactEdit() {
    // Validate State
    if (!this.isValidState()) {
      this.toastOptions.message = 'Por favor ingresa todos los campos';
      this.toast.create(this.toastOptions).present();
      return;
    }

    if (this.contactList !== null) {
      this.contactList.forEach(c => {
        if (c.idUser === this.newUser.idUser) {
          c.userName = this.newUser.userName;
          c.userLast = this.newUser.userLast;
          c.userBirth = this.newUser.userBirth;
        };
      });
      this.storageService.set('contactList', this.contactList);
      this.toastOptions.message = 'Se editado tu coincidencia';
      this.toast.create(this.toastOptions).present();
      this.view.dismiss();

    };
  }


  isValidState(): boolean {
    console.log('inside valide state');
    
    console.log(this.newUser);
    
    const numberKeys = Object.keys(this.newUser).length;
    if (numberKeys < 3) {
      return false;
    } else if (this.newUser.userName === '') {
      return false;
    } else if (this.newUser.userLast === '') {
      return false;
    } 
    else if(this.newUser.userBirth.toString() === '') {
      return false;
    }
    else {
      return true;
    }
  }

  
  // *************************++++++++++++++
  // Show hide functions
  // *************************++++++++++++++
  showAddContactButton(): boolean { return this.addContact === false || this.addContact === undefined }


}

