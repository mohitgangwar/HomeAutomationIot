import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private user: firebase.User;

  constructor(public afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }
  signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
  }
  signUp(credentials){
    console.log('signup using email');
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
  }
  get authenticated(): boolean {
    return this.user !== null;
  }
  getEmail() {
    return this.user && this.user.email;
  }
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
  
  

}
