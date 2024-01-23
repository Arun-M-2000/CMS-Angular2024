import { Injectable } from '@angular/core';
import { PPatientsViewModel } from './ppatients-view-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PPatientsViewModelService {
  patients: PPatientsViewModel[]; // for patient list
  formData: PPatientsViewModel = new PPatientsViewModel();
  filteredPatients: PPatientsViewModel[]; // for filtered patients

  constructor(private httpClient: HttpClient) { }

  BindListPatients() {
    this.httpClient.get(environment.apiUrl + "/api/PPatients/ViewModelGetPatientsList")
      .toPromise().then(response =>
        this.patients = this.filteredPatients = response as PPatientsViewModel[]
      );
  }

  searchPatients(searchTerm: string): boolean {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    this.filteredPatients = this.patients.filter(patient =>
      patient.RegNo.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.PhNo.toString().toLowerCase().includes(lowerCaseSearchTerm)
    );

    if (this.filteredPatients.length > 0) {
      return true; // Patients found
    } else {
      // Handle case when no matching patients are found
      console.log('No matching patients found.');
      return false; // Patients not found
    }
  }
}
