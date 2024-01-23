import { Injectable } from '@angular/core';
import { Pharmacymedicine } from './pharmacymedicine';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmacymedicineService {

  medicines: Pharmacymedicine[]; // for medicine list
  formData: Pharmacymedicine = new Pharmacymedicine();
  filteredMedicines: Pharmacymedicine[]; // for filtered medicines

  constructor(private httpClient: HttpClient) { }

  BindListMedicines() {
    this.httpClient.get(environment.apiUrl + "/api/AMedicine")
      .toPromise().then(response =>
        this.medicines = this.filteredMedicines = response as Pharmacymedicine[]
      );
  }

  searchMedicines(searchTerm: string): boolean {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    this.filteredMedicines = this.medicines.filter(medicine =>
      medicine.MedicineCode.toLowerCase().includes(lowerCaseSearchTerm) ||
      medicine.GenericName.toLowerCase().includes(lowerCaseSearchTerm)
    );

    if (this.filteredMedicines.length > 0) {
      return true; // Medicines found
    } else {
      // Handle case when no matching medicines are found
      console.log('No matching medicines found.');
      return false; // Medicines not found
    }
 
}
}