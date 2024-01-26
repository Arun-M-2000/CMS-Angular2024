import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusBasecomponentComponent } from './venus-basecomponent.component';

describe('VenusBasecomponentComponent', () => {
  let component: VenusBasecomponentComponent;
  let fixture: ComponentFixture<VenusBasecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusBasecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenusBasecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
