import { Component } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
import { usertype } from 'src/types/seller-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private sellerservice: SellerService, private router: Router) {}
  
  userdata: any;
  
  signup(data: usertype): void {
    this.sellerservice.usersign(data);
    this.userdata = data;
    if (data) {
      this.router.navigate(['seller-home']);
    }
  }
  ngOnInit():void{
    this.sellerservice.reloadseller()
  }

  formsub(data: usertype) {
    console.log(data);
    this.signup(data);
  }
}
