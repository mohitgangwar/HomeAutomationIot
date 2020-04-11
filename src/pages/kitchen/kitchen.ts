import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import * as firebase from 'firebase/app';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';
import { GlobalProvider } from '../../providers/global/global';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the KitchenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kitchen',
  templateUrl: 'kitchen.html',
})
export class KitchenPage {

  static value5: any;
  static kitchen: boolean;
  static value2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

    var config = {
      apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
      authDomain: "ahmiot.firebaseapp.com",
      databaseURL: "https://ahmiot.firebaseio.com",
      projectId: "ahmiot",
      storageBucket: "ahmiot.appspot.com",
      messagingSenderId: "309661173641"
    };

  if(!firebase.app.length){
    firebase.initializeApp(config);
  }
    
  var ref= firebase.app().database().ref();
  var databaseref2=ref.child("humidity");
  var databaseref5=ref.child("kitchenstate");

  databaseref2.on("value", function(snapshot) {
    KitchenPage.value2 = snapshot.val();
    console.log(KitchenPage.value2);
   }, 
   function (errorObject) {
    console.log("The read failed: " + errorObject.code);
   });

   databaseref5.on("value", function(snapshot) {
    KitchenPage.value5=snapshot.val();
    if(KitchenPage.value5){
      KitchenPage.kitchen=true;
     }
     else{
       KitchenPage.kitchen=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });


  }

  kitchenValue(){
    var ref= firebase.app().database().ref();
    var databaseref5=ref.child("kitchenstate");
    if(KitchenPage.value5==0){
      databaseref5.set(1);
       }
       else{
              databaseref5.set(0);
           }
    const toast = this.toastCtrl.create({
      message: 'Aplliances handeled successfully',
      duration: 3000
    });
    toast.present();
  }
   
  
  get kitchenstatevalue(){
    return KitchenPage.kitchen;
  }

  get value2func(){
    return KitchenPage.value2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivingRoomPage');
  }

}
