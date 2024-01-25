import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacymedicine } from 'src/app/Shared/pharmacymedicine';
import { PharmacymedicineService } from 'src/app/Shared/pharmacymedicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  searchTerm: string = '';
  medicinesFound: boolean = true;

  constructor(public pharmacymedicineService: PharmacymedicineService,private router: Router) { }

  ngOnInit(): void {
    console.log("Medicine Management");
    this.pharmacymedicineService.BindListMedicines();
  }

  searchMedicines() {
    console.log("Searching medicines with term: ", this.searchTerm);
    if (this.searchTerm) {
      this.medicinesFound = this.pharmacymedicineService.searchMedicines(this.searchTerm);
    } else {
      this.medicinesFound = true;
      this.pharmacymedicineService.BindListMedicines();
    }
  }

  reorderMedicine(medicine: Pharmacymedicine) {
    const confirmation = confirm(`Admin has been notified with the reorder of medicine ${medicine.MedicineCode}. Are you sure you want to proceed?`);
    if (confirmation) {
      // Perform reorder action here
      // Once reorder is successful, update the style of the button
      medicine.reordered = true;
    }
  }

  back(){
    this.router.navigateByUrl("p-pharmacist/home");
      }

}
