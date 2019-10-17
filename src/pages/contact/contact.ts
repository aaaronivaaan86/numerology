import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { User } from '../../shared/models/user';
import { AboutPage } from '../about/about';
import { ResultsPage } from '../results/results';
import { RemoveModalPage } from '../remove-modal/remove-modal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public addContact = false;
  public editContact = false;
  public contactList: User[] = new Array<User>();
  public show = true;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }


  ionViewWillEnter() {
    this.getContactList();    
  }

  getContactList() {
    this.storage.get('contactList').then((data) => {

      if (data !== null) {
        this.contactList = data;
        console.log(this.contactList);
        console.log(this.contactList.length);
      }

    });
  }

  opneModal(idUser) {
    // const modal = this.modalController.create(RemoveModalPage, {idUser: idUser});
    // modal.present();
    this.navCtrl.push(RemoveModalPage, {idUser: idUser});
  }


  showContactList(): boolean { return this.contactList === undefined || this.contactList.length === 0; }


  // go functions
  goProfileForm() {
    this.addContact = true;
    this.navCtrl.push(AboutPage, {addContact: this.addContact});
  }

  goEditContact(contact: any){
    this.editContact = true;
    console.log(contact)
    this.navCtrl.push(AboutPage, {contact: contact, editContact: this.editContact});
  }

  goResult(contact: User) {
    console.log(contact);
    this.navCtrl.push(ResultsPage, {user: contact});
  }


}
