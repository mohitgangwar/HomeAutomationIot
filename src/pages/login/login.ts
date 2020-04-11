import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {NgxErrorsModule} from '@ultimate/ngxerrors'
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,fb: FormBuilder) {
  
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  
  }
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(TabsPage),
				error => this.loginError = error.message
			);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }

}
