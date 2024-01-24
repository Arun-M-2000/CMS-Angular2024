import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPharmacistBillComponent } from './p-pharmacist-bill.component';

describe('PPharmacistBillComponent', () => {
  let component: PPharmacistBillComponent;
  let fixture: ComponentFixture<PPharmacistBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPharmacistBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPharmacistBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
