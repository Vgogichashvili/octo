import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const user = await this.afAuth.currentUser;
      const isAuthenticated = user ? true : false;
      if (!isAuthenticated) {
        alert('You must be authenticated in order to access this page');
      }
      return isAuthenticated;
  

  }


}