import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/Shared/medicine.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/Shared/medicine';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  constructor(public medicineservice:MedicineService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.medicineservice.formData=new Medicine();
  }

  onSubmit(form: NgForm) {
    let addId=this.medicineservice.formData.MedicineId;
    if (addId == 0 || addId == null) {
     // alert(addId);
     console.log(form.value);
     this.InsertRecord(form);
    
 
   }
   else {
     //alert("EmpId is greater")
     console.log(form.value);
     this.UpdateRecord(form);
   }
   }

   InsertRecord(form: NgForm){
    console.log("Inserting");
    this.medicineservice.insertMedicine(form.value).subscribe(
      (result)=>{
        console.log(result);
        
        this.resetForm(form);
        this.toastr.success('Added succesfully', 'EMS APP 2024');
        this.router.navigate(['a-medicine/list-medicine']);
      }
    )
  }


  UpdateRecord(form: NgForm){
    console.log("Updating");
    this.medicineservice.updateMedicine(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastr.success('Updated succesfullu', 'EMP APP 2024');
        this.router.navigate(['a-medicine/list-medicine']);
      }
    )
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  back(){
    this.router.navigateByUrl("a-medicine/list-medicine");
      }

}
