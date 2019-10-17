import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../shared/models/user';



/**
 * Generated class for the RemoveModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-modal',
  templateUrl: 'remove-modal.html',
})
export class RemoveModalPage {

  public idUser;
  private contactList: User[];
  private toastOptions = {
    message: 'Se ha añadido tu coincidencia',
    duration: 3000       
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast: ToastController,
              private view: ViewController,
              private storageService: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveModalPage');
    this.idUser = this.navParams.get('idUser');
    console.log(this.idUser);    
  }

  closeModal() {
    this.view.dismiss();
  }

  removeContact(){
    this.storageService.get("contactList").then((data) => {      
      this.contactList = data;
      console.log(this.contactList);
      const idxRemove = this.contactList.findIndex( (c: any) => c.idUser ===  this.idUser);
      console.log(idxRemove);
      this.contactList.splice(idxRemove, 1);
      this.storageService.set('contactList', this.contactList);
      this.toast.create(this.toastOptions).present();
      this.view.dismiss();
    });    
  }



}
