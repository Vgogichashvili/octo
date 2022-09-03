import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  hide = true;
  formData:any = {};

  constructor(private authser:UserAuthenticationService) { }

  ngOnInit(): void {
    this.createFormData()
  }
  createFormData(){
    this.formData = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  onUserRegister(){
    let data = this.formData.value;
    let email = data.email;
    let password = data.password;
    this.authser.userRegister(data, email, password)
  }
}
