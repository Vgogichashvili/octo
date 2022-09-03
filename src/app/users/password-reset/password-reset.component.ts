import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {

  constructor(private auth:UserAuthenticationService) { }

  ngOnInit(): void {
  }
  onUserPasswordResetBtnClick(email:any){
    this.auth.ForgotPassword(email)
  }

}
