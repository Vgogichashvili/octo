import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // MatPaginator Inputs
    length = 30;
    pageSize = 5;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  
    // MatPaginator Output
    pageEvent!: PageEvent;
  
  displayedColumns?: string[] = [ 'image', 'key','manufacturer', 'model', 'year', "phoneNumber","mile","price"
  ,'delete','update'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort
 

  constructor(private dialog:MatDialog,private firebaseClient:FirebaseHttpService,private router:Router,private auth:UserAuthenticationService) { }

  ngOnInit(): void {
    this.readDataToFirebase();
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
}

  readDataToFirebase(){
    this.firebaseClient.GetAllhouses().subscribe((response:any)=>{
      this.dataSource = new MatTableDataSource(response); 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  openUpdateService(id:any){
   this.firebaseClient.GetHouseByKey(id).subscribe((response:any)=>{
   })

  }



  openCreateService(){
    this.router.navigate(["create"]);
  }

}
