import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent implements OnInit {
  patients: any[] = []; // Placeholder for patient data

  constructor() { }
  ngOnInit(): void {
   
  }

  

}
