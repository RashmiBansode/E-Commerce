import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogin = false

  rashmi: FormGroup = new FormGroup({
    'name': new FormControl(''),
    'password': new FormControl(''),
    'email': new FormControl(''),
  })


  rassh: FormGroup = new FormGroup({
    'password': new FormControl(''),
    'email': new FormControl(''),
  })

  constructor(private seller:SellerService,private router:Router) {

  }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  userSign(data: Signup) {
    this.seller.userSign(this.rashmi.value)
  }

  openLogin() {
    this.showLogin = true
  }
  openSignup() {
    this.showLogin = false
  }

  loginSeller(){
    this.seller.userLogin(this.rassh.value)
  }
}
