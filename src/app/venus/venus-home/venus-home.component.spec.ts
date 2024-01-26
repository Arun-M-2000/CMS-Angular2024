import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusHomeComponent } from './venus-home.component';

describe('VenusHomeComponent', () => {
  let component: VenusHomeComponent;
  let fixture: ComponentFixture<VenusHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
