import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAuthenticationService } from './services/user-authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularcr';
  panelOpenState = false;
  afterLoginDisplay!:boolean;

  constructor(private auth:UserAuthenticationService,
    private dialog:MatDialog){}


  ngOnInit(): void {
    this.checkUserStatus()
  }


    checkUserStatus(){
    let userCheck = this.auth.userCheck();
    this.afterLoginDisplay = !userCheck;
    this.auth.userStatusEmitter.subscribe((response) => {
      this.afterLoginDisplay = response;
    })
  }

    onUserLogOut(){
    this.auth.userLogOut()
  }
  onUserDeleteAlertOpen(){
  
  }

  
}
