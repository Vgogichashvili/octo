import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  houses$ = this.firebaseClient.GetAllhouses();
  users$ = this.firebaseClient.GetAllUsers();
  data$ = combineLatest([
    this.houses$,
    this.users$,
  ]).pipe(map(([houses,users]) =>({
    houses,
    users,
  })))
  isMenuOpened:boolean = false;

  constructor(private router:Router,private firebaseClient:FirebaseHttpService ) { }

  

  ngOnInit(): void {
    this.toggleBtn();
  }

  toggleBtn(){
   this.isMenuOpened = !this.isMenuOpened
  }

  FullInfoBtn(key:string){
    this.router.navigate(["/house-information"]);
    console.log(key)
     
  }

}
