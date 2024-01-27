import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venus-home',
  templateUrl: './venus-home.component.html',
  styleUrls: ['./venus-home.component.scss']
})
export class VenusHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

login(){
  this.router.navigate(["homes/whole"]);
}


}
