import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/Shared/medicine';
import { MedicineService } from 'src/app/Shared/medicine.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent implements OnInit {
  medId: number;
  medicine: Medicine = new Medicine();

  constructor(private route: ActivatedRoute,
    private medicineservice: MedicineService) { }

  ngOnInit(): void {
    this.medId = this.route.snapshot.params['MedId'];
    console.log("hello");
    console.log(this.medId);

    this.medicineservice.getMedicine(this.medId)
      .subscribe(data => {
        console.log(data);
        this.medicine = data;



        this.medicineservice.formData = Object.assign({}, data);
      }, error => console.log(error));

  }
}


