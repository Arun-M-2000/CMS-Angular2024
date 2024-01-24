import { Component, OnInit } from '@angular/core';
import{Lab}from 'src/app/Shared/lab'
import { LabService } from 'src/app/Shared/lab.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.scss']
})
export class EditLabComponent implements OnInit {
 labId:number;
 lab:Lab=new Lab();
  constructor
  
  (private route: ActivatedRoute,
    private labservice:LabService) { }

  ngOnInit(): void {
    this.labId=this.route.snapshot.params['labId'];
    this.labservice.getLab(this.labId)
    .subscribe(data => {
      console.log(data);
      this.lab = data;

      

        this.labservice.formData = Object.assign({}, data);
      }, error => console.log(error));

  }
 
}
