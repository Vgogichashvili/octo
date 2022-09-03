import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  hide = true;
  formData:any = {}
  constructor(private authser:UserAuthenticationService) { }

  ngOnInit(): void {
    this.createFormData()
  }

  createFormData(){
    this.formData = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }
  onUserLogIn(){
    let email = this.formData.value.email;
    let password = this.formData.value.password;
    this.authser.userLogin(email, password)
  }

}
