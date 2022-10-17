import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { DialogComponent } from '../home/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpened:boolean = false;
  panelOpenState = false;
  afterLoginDisplay:boolean = false;
  logOutBtn:boolean = false

  constructor(private router:Router,private dialog:MatDialog,private auth:UserAuthenticationService) { }

  ngOnInit(): void {
    this.toggleBtn()
    this.checkUserStatus();
  }

   checkUserStatus(){
    let userCheck = this.auth.userCheck();
    this.afterLoginDisplay = !userCheck;
    this.auth.userStatusEmitter.subscribe((response) => {
      this.afterLoginDisplay = response;
     
    })
  }

   toggleBtn(){
    this.isMenuOpened = !this.isMenuOpened
    let navBar = document.querySelector("#navBar")
    navBar?.classList.toggle("hidemenu")
   }

  registerBtn(){
    this.router.navigate(['/user-login'])
  }

  
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  

}

