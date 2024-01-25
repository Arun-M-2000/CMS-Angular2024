import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
import{StaffDetailsViewModelService} from 'src/app/Shared/staff-details-view-model.service'

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  page:number=1;
filter: number;

  constructor(public staffservice:StaffDetailsViewModelService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    console.log("Welcome to lifecycle hook")
    this.staffservice.BindListStaffs();
  }

  UpdateStaff(staffId: number) {
    
    console.log(staffId);
    this.router.navigate(['a-staff/edit-staff', staffId]);
  }
  back(){
    this.router.navigateByUrl("a-home/adminhome");
      }
}

