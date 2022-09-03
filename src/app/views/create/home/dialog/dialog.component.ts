import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog:MatDialog, private auth:UserAuthenticationService) { }

  ngOnInit(): void {
  }

  onUserLogOut(){
    this.auth.userLogOut();
    this.dialog.closeAll()
  }

}
