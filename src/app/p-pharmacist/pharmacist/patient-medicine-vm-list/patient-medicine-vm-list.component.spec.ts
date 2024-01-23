import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicineVMListComponent } from './patient-medicine-vm-list.component';

describe('PatientMedicineVMListComponent', () => {
  let component: PatientMedicineVMListComponent;
  let fixture: ComponentFixture<PatientMedicineVMListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicineVMListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicineVMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
