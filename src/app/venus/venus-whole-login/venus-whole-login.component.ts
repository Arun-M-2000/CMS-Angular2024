import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venus-whole-login',
  templateUrl: './venus-whole-login.component.html',
  styleUrls: ['./venus-whole-login.component.scss']
})
export class VenusWholeLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  wholelogin(){
    this.router.navigate(["login/log"])
  }
  back(){
    this.router.navigateByUrl('');
      }
}
