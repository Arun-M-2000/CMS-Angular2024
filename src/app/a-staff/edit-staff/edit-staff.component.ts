import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/Shared/staff';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/Shared/staff.service';
import { StaffDetailsViewModelService } from 'src/app/Shared/staff-details-view-model.service';
import { StaffDetailsViewModel } from 'src/app/Shared/staff-details-view-model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  staffId: number;
  staff: Staff = new Staff();
  staffVM:StaffDetailsViewModel=new StaffDetailsViewModel();
  
  constructor(private route: ActivatedRoute,
    private staffservice: StaffService,
    private staffserviceVM:StaffDetailsViewModelService) { }

  ngOnInit(): void {

    this.staffId = this.route.snapshot.params['staffId'];
    console.log(this.staffId);
    this.staffserviceVM.getstaff(this.staffId)
      .subscribe(data => {
        console.log(data);
        this.staffVM = data;
        //change date formate to dd-mm-yy
        var datePipe = new DatePipe("en-UK");
        let formatedyear: any = datePipe.transform(data.JoiningDate, 'yyyy-MM-dd');
        data.JoiningDate = formatedyear;


        var datePipe = new DatePipe("en-UK");
        let formatedyear2: any = datePipe.transform(data.Dob, 'yyyy-MM-dd');
        data.Dob = formatedyear2; 



        //filling

        this.staffserviceVM.formData = Object.assign({}, data);
      }, error => console.log(error));

  }

  }


