import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  formDefaultData:any[] = [];
  key:string ="";
  // houses$ = this.firebaseClient.GetAllhouses();
  // users$ = this.firebaseClient.GetAllUsers();
  // data$ = combineLatest([
  //   this.houses$,
  //   this.users$,
  // ]).pipe(map(([houses,users]) =>({
  //   houses,
  //   users,
  // })))

 isMenuOpened:boolean = false;

  constructor(private firebaseClient:FirebaseHttpService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.toggleBtn();
    this.activatedRoute.params.subscribe((params:Params)=>{
        var key = params["key"];
        this.firebaseClient.GetHouseByKey(key).subscribe((response:any) =>{
          console.log(response)
          this.formDefaultData = response;
         
        })
      })
  }

  toggleBtn(){
   this.isMenuOpened = !this.isMenuOpened
  }

}
