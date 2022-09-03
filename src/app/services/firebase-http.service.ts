import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirebaseHttpService {

    housesRef!: AngularFireList<any>;
    usersRef!: AngularFireList<any>;
    imagesRef!: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) {
    this.housesRef = this.db.list('houses-list');
    this.usersRef = this.db.list('users');
    this.imagesRef = this.db.list('images');
   }

  AddHouse(House: any) {
    return this.housesRef.push(House);
  }

  GetAllhouses() {
    return this.housesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
      );
  }

    GetAllUsers() {
    return this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
      );
  }


    GetAllImages() {
    return this.imagesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
      );
  }

  GetHouse(id: string) { 
    return  this.db.object('houses-list/' + id);
  }

  GetHouseByKey(key: string):any {
    var HouseByKeyRef = this.db.list('houses-list/' + key);
    return HouseByKeyRef.valueChanges();
}

  GetUserByKey(key: string):any {
    var HouseByKeyRef = this.db.list('users/' + key);
    return HouseByKeyRef.valueChanges();
}

}