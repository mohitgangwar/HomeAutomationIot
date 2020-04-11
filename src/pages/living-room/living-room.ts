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
 * Generated class for the LivingRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-living-room',
  templateUrl: 'living-room.html',
})
export class LivingRoomPage {
  static value1: any;
  static livingroom: boolean;
  static value8: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
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
  var databaseref1=ref.child("air_quality");
  var databaseref8=ref.child("livingroomstate");
  
  databaseref1.on("value", function(snapshot) {
    LivingRoomPage.value1 = snapshot.val();
    console.log(LivingRoomPage.value1);
   }, 
   function (errorObject) {
    console.log("The read failed: " + errorObject.code);
   });
  
  
  databaseref8.on("value", function(snapshot) {
    LivingRoomPage.value8=snapshot.val();
    if(LivingRoomPage.value8){
      LivingRoomPage.livingroom=true;
    }
    else{
          LivingRoomPage.livingroom=false;
        }
    }, 

  function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  }); 

}


  livingroomValue(){
    const toast = this.toastCtrl.create({
      message: 'Aplliances handeled successfully',  //Creating toast at bottom
      duration: 3000
    });
    toast.present();
    var ref= firebase.app().database().ref();
    var databaseref8=ref.child("livingroomstate");
    if(LivingRoomPage.value8==0){
      return databaseref8.set(1);
    }
    else{
          return databaseref8.set(0);
        }
    
  } 

  get livingstatevalue(){
    return LivingRoomPage.livingroom;
  }

  get  value1func(){
    return LivingRoomPage.value1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivingRoomPage');
  }

}
