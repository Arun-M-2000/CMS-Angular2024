import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PPatientsMedViewModel } from './ppatients-med-view-model';

@Injectable({
  providedIn: 'root'
})
export class PPatientsMedViewModelService {

  patients: PPatientsMedViewModel[]; // for medicine details
  formData: PPatientsMedViewModel = new PPatientsMedViewModel();

  constructor(private httpClient: HttpClient) { }

  // Fetch patient medicine details based on registration number
  getPatientMedicineDetails(regNo: string): Observable<PPatientsMedViewModel[]> {
    const url = `${environment.apiUrl}/api/PPatientsMed/GetPatientMedicineDetails?regNo=${regNo}`;
    return this.httpClient.get<PPatientsMedViewModel[]>(url);
  }

  // Fetch all patient medicine details
  BindListPatientMedicine(): Observable<PPatientsMedViewModel[]> {
    const url = `${environment.apiUrl}/api/PPatientsMed/ViewModelGetPatientsMedList`;
    return this.httpClient.get<PPatientsMedViewModel[]>(url);
  }
}
