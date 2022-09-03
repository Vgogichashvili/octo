import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private snackBar:MatSnackBar,private afAuth:AngularFireAuth, private db:AngularFireDatabase, private router:Router) { }
  
  public userStatusEmitter:EventEmitter<boolean> = new EventEmitter()

  userRegister(formData:any, email:any, password:any){
    let promise = this.afAuth.createUserWithEmailAndPassword(email,password);
    promise.then((user:any) => {
      this.saveCreatedAccount(formData, user, email);
    })
    promise.catch(function(error) {
      console.error(error)
    })
  }

  saveCreatedAccount(formData:any, user:any, email:any) {
    var node_id = user.user.uid;
 
    formData.node_id = node_id;
    formData.email = email;
    formData.created = new Date().toLocaleString();

     this.writeUserData(node_id, formData);
 }
  writeUserData(node_id:any, formData:any) {
    let self = this;
  this.db.database.ref('users/' + node_id).set(formData, (error:any) => {
      if (error) {
          console.error(error)
      } else {
          this.snackBar.open("Success, Please login","Ok");
          self.router.navigate(['/user-login'])
      }
  });
}
  userLogin(email:any, password:any){
    let self = this;
    const promise = this.afAuth.signInWithEmailAndPassword(email, password);
    promise.then(function (user:any) {
    let uid = user.user.uid;
    localStorage['uid'] = uid;
    self.userStatusEmitter.emit(false)
    self.router.navigate(['/'])
  }).then((res) => {
    let key = localStorage['uid']
    this.db.object('users/' + key).update({
      password: password
    })
  })
      self=this;
    promise.catch(function(error:any) {
    return self.snackBar.open("Invalid e -mail or password","Ok")
  });
  }
  userLogOut(){
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('uid');
      this.userStatusEmitter.emit(true)
      this.router.navigate(['/'])
      this.snackBar.open("You have logged out","Ok");
    })
  }
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.snackBar.open("Password reset link was sent successfully", "Ok");
        this.router.navigate(['user-login'])
      })
      .catch((error) => {
        this.snackBar.open("Invalid email,enter valid E-mail address","Ok")
      })
  }


  userCheck(){
    if(localStorage['uid']){
      return true
    }else{
      return false
    }
  }
}
