// import { CanActivateFn } from '@angular/router';
// import { Component } from '@angular/core';
// import { SellerService } from './service/seller.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   constructor(private sellerservice:SellerService){}
//   return this.sellerservice;
// };

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerService } from './service/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sellerservice: SellerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    if(localStorage.getItem('result')){
    return true
    }

    return this.sellerservice.isLoggedin
    
  }
}
