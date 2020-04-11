import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import * as firebase from 'firebase/app';


import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';
import { GlobalProvider } from '../../providers/global/global';
import { LivingRoomPage } from '../living-room/living-room';
import { KitchenPage } from '../kitchen/kitchen';
import { BedroomPage } from '../bedroom/bedroom';
import { WashroomPage } from '../washroom/washroom';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public static value1:any;
  public static value2:any;
  public static value3:any;
  public static value4:any;
  public static value5:any;
  public static value6:any;
  public static value7:any;
  public static value8:any;
  public static livingroom:boolean;
  public static washroom:boolean;
  public static bedroom:boolean;
  public static kitchen:boolean;
  
   
  


  isListening: boolean = false;
  matches: Array<String>;

  constructor(public navCtrl: NavController,public speech: SpeechRecognition, private zone: NgZone) {
  
           
    var config = {
      apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
    authDomain: "ahmiot.firebaseapp.com",
    databaseURL: "https://ahmiot.firebaseio.com",
    projectId: "ahmiot",
    storageBucket: "ahmiot.appspot.com",
    messagingSenderId: "309661173641"
    };
if(!firebase.app.length){
firebase.initializeApp(config);}
   var ref= firebase.app().database().ref();
   var databaseref1=ref.child("air_quality");
   var databaseref2=ref.child("humidity");
   var databaseref3=ref.child("motion");
   var databaseref4=ref.child("temp");
   var databaseref5=ref.child("kitchenstate");
   var databaseref6=ref.child("washroomstate");
   var databaseref7=ref.child("bedroomstate");
   var databaseref8=ref.child("livingroomstate");
   
   databaseref1.on("value", function(snapshot) {
   HomePage.value1 = snapshot.val();
   
      console.log(HomePage.value1);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  databaseref2.on("value", function(snapshot) {
    HomePage.value2 = snapshot.val();
    console.log(HomePage.value2);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   databaseref3.on("value", function(snapshot) {
    HomePage.value3 = snapshot.val();
    console.log(HomePage.value3);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   databaseref4.on("value", function(snapshot) {
    HomePage.value4 = snapshot.val();
    console.log(HomePage.value4); 
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   //kitchen
   databaseref5.on("value", function(snapshot) {
    
    HomePage.value5=snapshot.val();
    if(HomePage.value5){
      HomePage.kitchen=true;
     }
     else{
       HomePage.kitchen=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   //washroom
   databaseref6.on("value", function(snapshot) {
    
    HomePage.value6=snapshot.val();
    if(HomePage.value6){
      HomePage.washroom=true;
     }
     else{
       HomePage.washroom=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   //bedroom
   databaseref7.on("value", function(snapshot) {
    
    HomePage.value7=snapshot.val();
    
    if(HomePage.value7){
      HomePage.bedroom=true;
     }
     else{
       HomePage.bedroom=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   //livingroom
   databaseref8.on("value", function(snapshot) {
       HomePage.value8=snapshot.val();
    if(HomePage.value8){
     HomePage.livingroom=true;
    }
    else{
      HomePage.livingroom=false;
    }
    
    }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   }); 
  
  
    
      

  }
ngOnInit() {

    this.speech.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
        this.speech.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')
          )
        }

     });

  }
  get livingstatevalue(){
    return HomePage.livingroom;
  }
  get bedroomstatevalue(){
    return HomePage.bedroom;
  }
  get washroomstatevalue(){
    return HomePage.washroom
    ;
  }

  get kitchenstatevalue(){
    return HomePage.kitchen;
  }
  
  get  value1func(){
    return HomePage.value1;
  }
  get value2func(){
    return HomePage.value2;
  }
  get value3func(){
    return HomePage.value3;
  }
  get value4func(){
    return HomePage.value4;
  }
  

  onContact(){
    this.navCtrl.push(AboutPage);
  }

  onLivingRoom(){
    this.navCtrl.push(LivingRoomPage);
  }

  onKitchen(){
    this.navCtrl.push(KitchenPage);
  }

  onBedroom(){
    this.navCtrl.push(BedroomPage);
  }

  onWash(){
    this.navCtrl.push(WashroomPage);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    let length = this.slides.length();
    if(currentIndex==length){
      this.slides.stopAutoplay();
    }
  }
  

 

  listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    
    this.speech.startListening()
      .subscribe(matches => {
        this.zone.run(() => {
          var ref= firebase.app().database().ref();
          var databaseref5=ref.child("kitchenstate");
   var databaseref6=ref.child("washroomstate");
   var databaseref7=ref.child("bedroomstate");
   var databaseref8=ref.child("livingroomstate");
          this.matches = matches;
        switch(matches[0]){
          case "turn off bedroom":
          databaseref7.set(0);
          break;
          case "turn off washroom":
          databaseref6.set(0);
          break;
          case "turn off kitchen":
          databaseref5.set(0);
          break;
          case "turn off living room":
          databaseref8.set(0);
          break;
          case "turn on bedroom":
          databaseref7.set(1);
          break;
          case "turn on washroom":
          databaseref6.set(1);
          break;
          case "turn on kitchen":
          databaseref5.set(1);
          break;
          case "turn on living room":
          databaseref8.set(1);
          break;
        }
        
        
        })
      }, error => console.error(error));

  }
 

  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }
 
   kitchenValue(){
    var ref= firebase.app().database().ref();
    var databaseref5=ref.child("kitchenstate");
    if(HomePage.value5==0){
      databaseref5.set(1);
       }
       else{
databaseref5.set(0);
       }
    }
  washroomValue(){
    var ref= firebase.app().database().ref();
    var databaseref6=ref.child("washroomstate");
    if(HomePage.value6==0){
      databaseref6.set(1);
       }
       else{
databaseref6.set(0);
       }}
  bedroomValue(){
        var ref= firebase.app().database().ref();
        var databaseref7=ref.child("bedroomstate");
        if(HomePage.value7==0){
          databaseref7.set(1);
           }
           else{
    databaseref7.set(0);
           }}
    livingroomValue(){
            var ref= firebase.app().database().ref();
            var databaseref8=ref.child("livingroomstate");
            if(HomePage.value8==0){
              databaseref8.set(1);
               }
               else{
        databaseref8.set(0);
               }}


              }
