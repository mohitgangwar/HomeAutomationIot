import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the WashroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washroom',
  templateUrl: 'washroom.html',
})
export class WashroomPage {
  static value3: any;
  static value6: any;
  static washroom: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {

    var config = {
      apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
      authDomain: "cdacproject-8bc9f.firebaseapp.com",
      databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
      projectId: "cdacproject-8bc9f",
      storageBucket: "cdacproject-8bc9f.appspot.com",
      messagingSenderId: "767234563615"
    };
if(!firebase.app.length){
firebase.initializeApp(config);}
   var ref= firebase.app().database().ref();
   var databaseref3=ref.child("motion");
   var databaseref6=ref.child("washroomstate");

   databaseref3.on("value", function(snapshot) {
    WashroomPage.value3 = snapshot.val();
    console.log(WashroomPage.value3);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   databaseref6.on("value", function(snapshot) {
    
    WashroomPage.value6=snapshot.val();
    if(WashroomPage.value6){
      WashroomPage.washroom=true;
     }
     else{
       WashroomPage.washroom=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   
  }

  get value3func(){
    return WashroomPage.value3;
  }

  washroomValue(){
    var ref= firebase.app().database().ref();
    var databaseref6=ref.child("washroomstate");
    if(WashroomPage.value6==0){
      databaseref6.set(1);
    }
    else{
          databaseref6.set(0);
        }
    const toast = this.toastCtrl.create({
      message: 'Aplliances handeled successfully',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WashroomPage');
  }

}
