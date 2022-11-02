import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  imageSrc!:string;



  imgSrc:string= './../../assets/images/uploadimagefile.png';
  selectedImage:any = null;
  isSubmited:boolean = false;
  hide = true;
  @Output()
  formSubmitEmitter:EventEmitter<any> = new EventEmitter();

  @Input()
  formDefaultData:any[] = [];


  constructor(private router:Router,private firebaseClient:FirebaseHttpService,private af:AngularFireStorage) { }

  ngOnInit(): void {
    this.initFormDefaultData()
  }

  formTemplate = new FormGroup({
    house: new FormControl(''),
    location: new FormControl(''),
    guest: new FormControl(''),
    bed: new FormControl(''),
    bathroom: new FormControl(''),
    price: new FormControl(''),
    image:new FormControl('')
  })

   onCancelBtnClick(){
     this.router.navigate(['/']);
   }



   onFormSubmit(formValue:any){
    this.isSubmited = true;
    var filepath = `images/${this.selectedImage.name}_${new Date().getTime()}`
    const fileRef = this.af.ref(filepath);
    this.af.upload(filepath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          formValue['image'] = url;
          this.firebaseClient.AddHouse(formValue)
        })
      })
    ).subscribe()
    this.formTemplate.reset();
    this.router.navigate(['/house-listing']);
      
  
   }

   initFormDefaultData(){
    if(this.formDefaultData.length!=0){
      this.formDefaultData.forEach((houseItem:any)=>{
        console.log(houseItem)
      })
    }
   }


   onImageBtnClick(imageInp:any){
    imageInp.click()
  }


  onImageInpUpload(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = './../../assets/images/uploadimagefile.png'
      this.selectedImage = null;
    }
  }

   
}


