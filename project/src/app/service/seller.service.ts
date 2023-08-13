import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoggedin = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router:Router) {}
  usersign(data: any) {
    console.log('user signup');
     this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isLoggedin.next(true);
        localStorage.setItem('result', JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        console.log(result, 'result');
      });
  };
  reloadseller(){
    if(localStorage.getItem('result')){
      this.isLoggedin.next(true );
      this.router.navigate(['seller-home'])

    }
  }
}
