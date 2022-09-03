import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formData:any = NgForm;
   path!:string;
   path2!:string;
   path3!:string;
   path4!:string;
   path5!:string;
  imageSrc!:string;
 hide = true;
  @Output()
  formSubmitEmitter:EventEmitter<any> = new EventEmitter();

  @Input()
  formDefaultData:any[] = [];


  constructor(private router:Router,private firebaseClient:FirebaseHttpService,private af:AngularFireStorage) { }

  ngOnInit(): void {
    this.initFormDefaultData()
  }



   onCancelBtnClick(){
     this.router.navigate(['/']);
   }

  
   onFormSubmit(form:NgForm){
    this.formSubmitEmitter.emit(form.value)
    this.firebaseClient.AddHouse(form.value)
    this.submitAllImages();
    form.reset();
    this.router.navigate(['/house-listing']);
      
  
   }

   initFormDefaultData(){
    if(this.formDefaultData.length!=0){
      this.formDefaultData.forEach((carItem:any)=>{
        console.log(carItem)
      })
    }
   }

  //  onImageBtnClick(imageInp:any){
  //   imageInp.click()
  // }

  // onImageInpUpload(event:any) {
  //   let self = this;
  //   let reader = new FileReader();
  //   reader.addEventListener("load", function(){
  //     self.imageSrc = reader.result as string;
  //     self.formData.value.image = reader.result
  //   })
  //   reader.readAsDataURL(event.target.files[0])
  // }


upload($event:any){
    this.path = $event.target.files[0]
  }

upload2($event:any){
    this.path2 = $event.target.files[0]
  }

upload3($event:any){
    this.path3 = $event.target.files[0]
  }
upload4($event:any){
    this.path4 = $event.target.files[0]
  }
upload5($event:any){
    this.path5 = $event.target.files[0]
  }

  submitAllImages(){
    this.af.upload("/files"+Math.random()+this.path,this.path);
    this.af.upload("/files"+Math.random()+this.path2,this.path2);
    this.af.upload("/files"+Math.random()+this.path3,this.path3);
    this.af.upload("/files"+Math.random()+this.path4,this.path4);
    this.af.upload("/files"+Math.random()+this.path5,this.path5);
  }

  //  uploadImage(){
  //   console.log(this.path);
  //   this.af.upload("/files"+Math.random()+this.path,this.path)
  //  }

   
}


