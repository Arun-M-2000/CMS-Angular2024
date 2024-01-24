import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Shared/patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/Shared/patient.service';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  patientId:number;
  patients:Patient=new Patient();

  constructor( private route: ActivatedRoute,
    private patientservice:PatientService) { }

  ngOnInit(): void {

    this.patientId=this.route.snapshot.params['patientId']

    this.patientservice.getPatientById(this.patientId)
    .subscribe(data=>{
      console.log=data;
      this.patients=data;

      this.patientservice.formData=Object.assign({},data);
    },error=>console.log(error))
  }


}
