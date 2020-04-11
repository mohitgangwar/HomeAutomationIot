webpackJsonp([6],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    /*tab2Root = ControlsPage;
    tab3Root = SettingsPage;
    tab4Root = ContactPage;*/
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0" color="tabcolor">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Control" tabIcon="game-controller-a"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contact"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BedroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BedroomPage = (function () {
    function BedroomPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        var config = {
            apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
            authDomain: "ahmiot.firebaseapp.com",
            databaseURL: "https://ahmiot.firebaseio.com",
            projectId: "ahmiot",
            storageBucket: "ahmiot.appspot.com",
            messagingSenderId: "309661173641"
        };
        if (!__WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"].length) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](config);
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref4 = ref.child("car");
        var databaseref7 = ref.child("cars");
        databaseref4.on("value", function (snapshot) {
            BedroomPage_1.value4 = snapshot.val();
            console.log(BedroomPage_1.value4);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref7.on("value", function (snapshot) {
            BedroomPage_1.value7 = snapshot.val();
            if (BedroomPage_1.value7) {
                BedroomPage_1.bedroom = true;
            }
            else {
                BedroomPage_1.bedroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    BedroomPage_1 = BedroomPage;
    Object.defineProperty(BedroomPage.prototype, "bedroomstatevalue", {
        get: function () {
            return BedroomPage_1.bedroom;
        },
        enumerable: true,
        configurable: true
    });
    BedroomPage.prototype.bedroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref7 = ref.child("cars");
        if (BedroomPage_1.value7 == 0) {
            databaseref7.set(1);
        }
        else {
            databaseref7.set(0);
        }
        var toast = this.toastCtrl.create({
            message: 'Aplliances handeled successfully',
            duration: 3000
        });
        toast.present();
    };
    Object.defineProperty(BedroomPage.prototype, "value4func", {
        get: function () {
            return BedroomPage_1.value4;
        },
        enumerable: true,
        configurable: true
    });
    BedroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BedroomPage');
    };
    BedroomPage = BedroomPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bedroom',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\bedroom\bedroom.html"*/'<!--\n  Generated template for the BedroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bedroom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n  <ion-col>\n    <ion-card-title class="font">\n      <strong><em>Usage:</em></strong>\n    </ion-card-title>\n    <hr style="margin-top:-7px;background-color:aliceblue">\n    <div class="items">\n        <ion-list>\n            <ion-item class="card">\n              <ion-label>Fan : {{value4func}}</ion-label>\n              <ion-toggle [(ngModel)]="bedroomstatevalue" (click)="bedroomValue()"></ion-toggle>\n            </ion-item>\n\n            <ion-item class="card">\n                <ion-label>Lights : {{value4func}}</ion-label>\n                <ion-toggle [(ngModel)]="bedroomstatevalue" (click)="bedroomValue()"></ion-toggle>\n            </ion-item>\n         </ion-list>\n      </div>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\bedroom\bedroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BedroomPage);
    return BedroomPage;
    var BedroomPage_1;
}());

//# sourceMappingURL=bedroom.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the KitchenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KitchenPage = (function () {
    function KitchenPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        var config = {
            apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
            authDomain: "ahmiot.firebaseapp.com",
            databaseURL: "https://ahmiot.firebaseio.com",
            projectId: "ahmiot",
            storageBucket: "ahmiot.appspot.com",
            messagingSenderId: "309661173641"
        };
        if (!__WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"].length) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](config);
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref2 = ref.child("humidity");
        var databaseref5 = ref.child("kitchenstate");
        databaseref2.on("value", function (snapshot) {
            KitchenPage_1.value2 = snapshot.val();
            console.log(KitchenPage_1.value2);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref5.on("value", function (snapshot) {
            KitchenPage_1.value5 = snapshot.val();
            if (KitchenPage_1.value5) {
                KitchenPage_1.kitchen = true;
            }
            else {
                KitchenPage_1.kitchen = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    KitchenPage_1 = KitchenPage;
    KitchenPage.prototype.kitchenValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref5 = ref.child("kitchenstate");
        if (KitchenPage_1.value5 == 0) {
            databaseref5.set(1);
        }
        else {
            databaseref5.set(0);
        }
        var toast = this.toastCtrl.create({
            message: 'Aplliances handeled successfully',
            duration: 3000
        });
        toast.present();
    };
    Object.defineProperty(KitchenPage.prototype, "kitchenstatevalue", {
        get: function () {
            return KitchenPage_1.kitchen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KitchenPage.prototype, "value2func", {
        get: function () {
            return KitchenPage_1.value2;
        },
        enumerable: true,
        configurable: true
    });
    KitchenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivingRoomPage');
    };
    KitchenPage = KitchenPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kitchen',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\kitchen\kitchen.html"*/'<!--\n  Generated template for the KitchenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Kitchen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>      \n  <ion-col class="items">\n    <ion-card-title class="font">\n        <strong><em>Usage:</em></strong>\n    </ion-card-title>\n\n    <hr style="margin-top:-7px;background-color:aliceblue">\n    <div>\n      <ion-list>\n        <ion-item class="card">\n          <ion-label>Oven: </ion-label>\n          <ion-toggle [(ngModel)]="kitchenstatevalue" (click)="kitchenValue()"></ion-toggle>\n        </ion-item>\n\n        <ion-item class="card">\n          <ion-label>Fan: </ion-label>\n          <ion-toggle [(ngModel)]="kitchenstatevalue" (click)="kitchenValue()"></ion-toggle>\n        </ion-item>\n\n\n      </ion-list>\n    </div>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\kitchen\kitchen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], KitchenPage);
    return KitchenPage;
    var KitchenPage_1;
}());

//# sourceMappingURL=kitchen.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LivingRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivingRoomPage = (function () {
    function LivingRoomPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        var config = {
            apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
            authDomain: "ahmiot.firebaseapp.com",
            databaseURL: "https://ahmiot.firebaseio.com",
            projectId: "ahmiot",
            storageBucket: "ahmiot.appspot.com",
            messagingSenderId: "309661173641"
        };
        if (!__WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"].length) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](config);
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref1 = ref.child("air_quality");
        var databaseref8 = ref.child("livingroomstate");
        databaseref1.on("value", function (snapshot) {
            LivingRoomPage_1.value1 = snapshot.val();
            console.log(LivingRoomPage_1.value1);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref8.on("value", function (snapshot) {
            LivingRoomPage_1.value8 = snapshot.val();
            if (LivingRoomPage_1.value8) {
                LivingRoomPage_1.livingroom = true;
            }
            else {
                LivingRoomPage_1.livingroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    LivingRoomPage_1 = LivingRoomPage;
    LivingRoomPage.prototype.livingroomValue = function () {
        var toast = this.toastCtrl.create({
            message: 'Aplliances handeled successfully',
            duration: 3000
        });
        toast.present();
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref8 = ref.child("livingroomstate");
        if (LivingRoomPage_1.value8 == 0) {
            return databaseref8.set(1);
        }
        else {
            return databaseref8.set(0);
        }
    };
    Object.defineProperty(LivingRoomPage.prototype, "livingstatevalue", {
        get: function () {
            return LivingRoomPage_1.livingroom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LivingRoomPage.prototype, "value1func", {
        get: function () {
            return LivingRoomPage_1.value1;
        },
        enumerable: true,
        configurable: true
    });
    LivingRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivingRoomPage');
    };
    LivingRoomPage = LivingRoomPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-living-room',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\living-room\living-room.html"*/'<!--\n  Generated template for the LivingRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Living Room</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>      \n    <ion-col class="items">\n      <ion-card-title class="font">\n        <strong><em>Usage:</em></strong>\n      </ion-card-title>\n\n      <hr style="margin-top:-7px;background-color:aliceblue">\n      <div>\n        <ion-list>\n          <ion-item class="card">\n            <ion-label>Light: </ion-label>\n            <ion-toggle [(ngModel)]="livingstatevalue" (click)="livingroomValue()"></ion-toggle>\n            <h1>{{livingroom}}</h1>\n          </ion-item>\n\n          <ion-item class="card">\n            <ion-label>Fan: </ion-label>\n            <ion-toggle [(ngModel)]="livingstatevalue" (click)="livingroomValue()"></ion-toggle>\n            <h1>{{livingroom}}</h1>\n          </ion-item>\n\n        </ion-list>\n      </div>\n    </ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\living-room\living-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LivingRoomPage);
    return LivingRoomPage;
    var LivingRoomPage_1;
}());

//# sourceMappingURL=living-room.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WashroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WashroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WashroomPage = (function () {
    function WashroomPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        var config = {
            apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
            authDomain: "cdacproject-8bc9f.firebaseapp.com",
            databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
            projectId: "cdacproject-8bc9f",
            storageBucket: "cdacproject-8bc9f.appspot.com",
            messagingSenderId: "767234563615"
        };
        if (!__WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"].length) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](config);
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref3 = ref.child("motion");
        var databaseref6 = ref.child("washroomstate");
        databaseref3.on("value", function (snapshot) {
            WashroomPage_1.value3 = snapshot.val();
            console.log(WashroomPage_1.value3);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref6.on("value", function (snapshot) {
            WashroomPage_1.value6 = snapshot.val();
            if (WashroomPage_1.value6) {
                WashroomPage_1.washroom = true;
            }
            else {
                WashroomPage_1.washroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    WashroomPage_1 = WashroomPage;
    Object.defineProperty(WashroomPage.prototype, "value3func", {
        get: function () {
            return WashroomPage_1.value3;
        },
        enumerable: true,
        configurable: true
    });
    WashroomPage.prototype.washroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["app"]().database().ref();
        var databaseref6 = ref.child("washroomstate");
        if (WashroomPage_1.value6 == 0) {
            databaseref6.set(1);
        }
        else {
            databaseref6.set(0);
        }
        var toast = this.toastCtrl.create({
            message: 'Aplliances handeled successfully',
            duration: 3000
        });
        toast.present();
    };
    WashroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WashroomPage');
    };
    WashroomPage = WashroomPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-washroom',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\washroom\washroom.html"*/'<!--\n  Generated template for the WashroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Washroom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n    <ion-col>\n      <ion-card-title class="font">\n        <strong><em>Usage:</em></strong>\n      </ion-card-title>\n      <hr style="margin-top:-7px;background-color:aliceblue">\n      <div class="items">\n          <ion-list>\n              <ion-item class="card">\n                <ion-label>Gyser : {{value3func}}</ion-label>\n                <ion-toggle [(ngModel)]="washroomstatevalue" (click)="washroomValue()"></ion-toggle>\n              </ion-item>\n\n              <ion-item class="card">\n                  <ion-label>Lights : {{value3func}}</ion-label>\n                  <ion-toggle [(ngModel)]="washroomstatevalue" (click)="washroomValue()"></ion-toggle>\n              </ion-item>\n\n          </ion-list>\n      </div>\n    </ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\washroom\washroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WashroomPage);
    return WashroomPage;
    var WashroomPage_1;
}());

//# sourceMappingURL=washroom.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\signup\signup.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Sign up</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n\n	<form class="form" (ngSubmit)="signup()" [formGroup]="form">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{signupError}}</div>\n\n			<button class="font" ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bedroom/bedroom.module": [
		729,
		5
	],
	"../pages/kitchen/kitchen.module": [
		730,
		4
	],
	"../pages/living-room/living-room.module": [
		731,
		3
	],
	"../pages/login/login.module": [
		732,
		2
	],
	"../pages/signup/signup.module": [
		733,
		1
	],
	"../pages/washroom/washroom.module": [
		734,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__living_room_living_room__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kitchen_kitchen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bedroom_bedroom__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__washroom_washroom__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, speech, zone) {
        this.navCtrl = navCtrl;
        this.speech = speech;
        this.zone = zone;
        this.isListening = false;
        var config = {
            apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
            authDomain: "ahmiot.firebaseapp.com",
            databaseURL: "https://ahmiot.firebaseio.com",
            projectId: "ahmiot",
            storageBucket: "ahmiot.appspot.com",
            messagingSenderId: "309661173641"
        };
        if (!__WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"].length) {
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["initializeApp"](config);
        }
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref1 = ref.child("air_quality");
        var databaseref2 = ref.child("humidity");
        var databaseref3 = ref.child("motion");
        var databaseref4 = ref.child("temp");
        var databaseref5 = ref.child("kitchenstate");
        var databaseref6 = ref.child("washroomstate");
        var databaseref7 = ref.child("bedroomstate");
        var databaseref8 = ref.child("livingroomstate");
        databaseref1.on("value", function (snapshot) {
            HomePage_1.value1 = snapshot.val();
            console.log(HomePage_1.value1);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref2.on("value", function (snapshot) {
            HomePage_1.value2 = snapshot.val();
            console.log(HomePage_1.value2);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref3.on("value", function (snapshot) {
            HomePage_1.value3 = snapshot.val();
            console.log(HomePage_1.value3);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref4.on("value", function (snapshot) {
            HomePage_1.value4 = snapshot.val();
            console.log(HomePage_1.value4);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //kitchen
        databaseref5.on("value", function (snapshot) {
            HomePage_1.value5 = snapshot.val();
            if (HomePage_1.value5) {
                HomePage_1.kitchen = true;
            }
            else {
                HomePage_1.kitchen = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //washroom
        databaseref6.on("value", function (snapshot) {
            HomePage_1.value6 = snapshot.val();
            if (HomePage_1.value6) {
                HomePage_1.washroom = true;
            }
            else {
                HomePage_1.washroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //bedroom
        databaseref7.on("value", function (snapshot) {
            HomePage_1.value7 = snapshot.val();
            if (HomePage_1.value7) {
                HomePage_1.bedroom = true;
            }
            else {
                HomePage_1.bedroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //livingroom
        databaseref8.on("value", function (snapshot) {
            HomePage_1.value8 = snapshot.val();
            if (HomePage_1.value8) {
                HomePage_1.livingroom = true;
            }
            else {
                HomePage_1.livingroom = false;
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.speech.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speech.requestPermission()
                    .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
            }
        });
    };
    Object.defineProperty(HomePage.prototype, "livingstatevalue", {
        get: function () {
            return HomePage_1.livingroom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "bedroomstatevalue", {
        get: function () {
            return HomePage_1.bedroom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "washroomstatevalue", {
        get: function () {
            return HomePage_1.washroom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "kitchenstatevalue", {
        get: function () {
            return HomePage_1.kitchen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value1func", {
        get: function () {
            return HomePage_1.value1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value2func", {
        get: function () {
            return HomePage_1.value2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value3func", {
        get: function () {
            return HomePage_1.value3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value4func", {
        get: function () {
            return HomePage_1.value4;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.onContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.onLivingRoom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__living_room_living_room__["a" /* LivingRoomPage */]);
    };
    HomePage.prototype.onKitchen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__kitchen_kitchen__["a" /* KitchenPage */]);
    };
    HomePage.prototype.onBedroom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bedroom_bedroom__["a" /* BedroomPage */]);
    };
    HomePage.prototype.onWash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__washroom_washroom__["a" /* WashroomPage */]);
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var length = this.slides.length();
        if (currentIndex == length) {
            this.slides.stopAutoplay();
        }
    };
    HomePage.prototype.listen = function () {
        var _this = this;
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }
        this.speech.startListening()
            .subscribe(function (matches) {
            _this.zone.run(function () {
                var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
                var databaseref5 = ref.child("kitchenstate");
                var databaseref6 = ref.child("washroomstate");
                var databaseref7 = ref.child("bedroomstate");
                var databaseref8 = ref.child("livingroomstate");
                _this.matches = matches;
                switch (matches[0]) {
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
            });
        }, function (error) { return console.error(error); });
    };
    HomePage.prototype.toggleListenMode = function () {
        this.isListening = this.isListening ? false : true;
        console.log('listening mode is now : ' + this.isListening);
    };
    HomePage.prototype.kitchenValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref5 = ref.child("kitchenstate");
        if (HomePage_1.value5 == 0) {
            databaseref5.set(1);
        }
        else {
            databaseref5.set(0);
        }
    };
    HomePage.prototype.washroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref6 = ref.child("washroomstate");
        if (HomePage_1.value6 == 0) {
            databaseref6.set(1);
        }
        else {
            databaseref6.set(0);
        }
    };
    HomePage.prototype.bedroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref7 = ref.child("bedroomstate");
        if (HomePage_1.value7 == 0) {
            databaseref7.set(1);
        }
        else {
            databaseref7.set(0);
        }
    };
    HomePage.prototype.livingroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref8 = ref.child("livingroomstate");
        if (HomePage_1.value8 == 0) {
            databaseref8.set(1);
        }
        else {
            databaseref8.set(0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-md-6>\n        <ion-card class="card chat-item">\n          <div>\n            <ion-row>\n              <ion-col>\n                <img src="../../assets/images/card1_2.png" (click)=onLivingRoom() />\n              </ion-col>\n            </ion-row>  \n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-md-6>\n        <ion-card class="card">\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/images/card2_2.png"  (click)=onKitchen()/>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col col-md-6>\n        <ion-card class="card">\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/images/card3.png" (click)=onWash()/>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col col-md-6>\n        <ion-card class="card">\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/images/card4.png" (click)=onBedroom() />\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-md-12>  \n        <ion-list>\n          <ion-chip color="primary">\n            <ion-icon name="heart" color="dark"></ion-icon>\n              <ion-label class="cardFont">Air Quality : {{value1func}}</ion-label>\n          </ion-chip>\n          <br>\n          <ion-chip color="dark">\n            <ion-icon name="water"></ion-icon>\n            <ion-label class="fabFont">Humidity : {{value2func}} %</ion-label>\n          </ion-chip>\n          <br>\n          <ion-chip color="primary">\n            <ion-icon name="thermometer" color="dark"></ion-icon>\n            <ion-label class="cardFont">Temperature : {{value4func}} °C</ion-label>\n          </ion-chip>\n          <br>\n          <ion-fab bottom right>\n            <button ion-fab mini (click)="listen()">\n              <ion-icon name="mic"></ion-icon>\n            </button>\n          </ion-fab>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  <!-- <ion-fab bottom left>\n      <button ion-fab mini>\n        <ion-icon name="thermometer"></ion-icon>\n      </button>\n      <ion-fab-list side="top">\n        \n      </ion-fab-list>\n  </ion-fab> -->\n  <!-- <ion-card style="background-color:purple">\n    <ion-slides  autoplay="5000" loop="true" speed="500" pager="true" (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n          <h1>This is my Home Automation App</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 2</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 3</h1>\n      </ion-slide>\n      <ion-slide>\n          <h1>Slide 4</h1>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <button ion-button (click)="getPermission()">Get Permission</button> -->\n\n  <ion-card>\n    <ion-card-content *ngFor="let match of matches">\n      <p>{{ match }}</p>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card>\n      <p>Is listening ? : {{ isListening }}</p>\n    </ion-card> -->\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div>\n  <p>This page will give you information about your machines</p>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_speech_recognition__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_global_global__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ultimate_ngxerrors__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_living_room_living_room__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_kitchen_kitchen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_bedroom_bedroom__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_washroom_washroom__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var config = {
    apiKey: "AIzaSyCZLB3H-5qRKSnj0kCWgbC-OM-hbvWCtLY",
    authDomain: "ahmiot.firebaseapp.com",
    databaseURL: "https://ahmiot.firebaseio.com",
    projectId: "ahmiot",
    storageBucket: "ahmiot.appspot.com",
    messagingSenderId: "309661173641"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__["a" /* ControlsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_living_room_living_room__["a" /* LivingRoomPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_kitchen_kitchen__["a" /* KitchenPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bedroom_bedroom__["a" /* BedroomPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_washroom_washroom__["a" /* WashroomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_21__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bedroom/bedroom.module#BedroomPageModule', name: 'BedroomPage', segment: 'bedroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kitchen/kitchen.module#KitchenPageModule', name: 'KitchenPage', segment: 'kitchen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/living-room/living-room.module#LivingRoomPageModule', name: 'LivingRoomPage', segment: 'living-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/washroom/washroom.module#WashroomPageModule', name: 'WashroomPage', segment: 'washroom', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__["a" /* ControlsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_living_room_living_room__["a" /* LivingRoomPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_kitchen_kitchen__["a" /* KitchenPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bedroom_bedroom__["a" /* BedroomPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_washroom_washroom__["a" /* WashroomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, settings, auth, menu) {
        var _this = this;
        this.settings = settings;
        this.auth = auth;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.intializeApp = function () {
        var _this = this;
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\app\app.html"*/'<ion-menu [class]="selectedTheme" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Pages</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-list-header *ngIf="auth.getEmail()">{{auth.getEmail()}}</ion-list-header>\n\n    <ion-item (click)="logout()" *ngIf="auth.authenticated">\n        <ion-icon name="log-out" item-left></ion-icon>\n        Log out\n    </ion-item>\n</ion-menu>\n   \n	\n\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsPage = (function () {
    function ControlsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ControlsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-controls',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\controls\controls.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Controls</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\controls\controls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ControlsPage);
    return ControlsPage;
}());

//# sourceMappingURL=controls.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, settings) {
        this.navCtrl = navCtrl;
        this.settings = settings;
    }
    SettingsPage.prototype.toggleAppTheme = function () {
        this.settings.setActiveTheme('dark-theme');
    };
    SettingsPage.prototype.appLightTheme = function () {
        this.settings.setActiveTheme('light-theme');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card color="dark">\n\n    <ion-card-header>\n      Select App Theme:\n      <ion-row>\n        <em>(Default: Dark)</em>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <button ion-button (click)="toggleAppTheme()">\n        Dark\n      </button>\n      <button ion-button (click)="appLightTheme()">\n        Light\n      </button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider.prototype.signUp = function (credentials) {
        console.log('signup using email');
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthProvider.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Log in</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n	<form class="form" (ngSubmit)="login()" [formGroup]="loginForm">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors" class="font">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors" class="font">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{loginError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n			<div class="login-footer">\n				<p class="font">\n					<a href="#">Forgot password?</a>\n					If you\'re a new user, please sign up.\n				</p>\n			</div>\n\n			<ion-list>\n\n				<button ion-button icon-left block clear (click)="loginWithGoogle()">\n					<ion-icon name="logo-google"></ion-icon>\n					Log in with Google\n				</button>\n\n				<button ion-button icon-left block clear (click)="signup()">\n					<ion-icon name="person-add"></ion-icon>\n					Sign up\n				</button>\n			</ion-list>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"C:\Users\Mohit Gangwar\Desktop\demo\smartParking\homeAutomation\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map