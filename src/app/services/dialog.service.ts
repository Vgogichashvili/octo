import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../views/create/home/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openService(openTrigger:'update'|'create'){
    this.dialog.open(DialogComponent,{data:{message:openTrigger}});
  }
}
