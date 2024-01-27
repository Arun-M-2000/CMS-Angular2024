import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusWholeLoginComponent } from './venus-whole-login.component';

describe('VenusWholeLoginComponent', () => {
  let component: VenusWholeLoginComponent;
  let fixture: ComponentFixture<VenusWholeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusWholeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenusWholeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
