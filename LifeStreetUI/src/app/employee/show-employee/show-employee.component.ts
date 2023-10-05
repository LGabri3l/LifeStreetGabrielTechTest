import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Shared/service.service';


@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private service: ServiceService) { }

  EmployeeList: any = [];


  employee: any;
  ModalTitle!: string;
  ActiveteAddEditEmployeeComp: boolean = false;

  EmployeeNameFilter: string = "";
  EmployeeListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshEmployee();
  }

  addClick() {
    this.employee = {
      EmployeeID: 0,
      EmployeeName: "",
      StartDate: "",
      Position: "",
      EmpAddress: "",
      EmpDateOfBirth: "",
      EmpPhone: ""
    }
    this.ModalTitle = "Add New Employee";
    this.ActiveteAddEditEmployeeComp = true;
    this.refreshEmployee();
  }

  editClick(item: any) {
    this.employee = item;
    this.ModalTitle = "Edit Employee";
    this.ActiveteAddEditEmployeeComp = true;
  }

  closeClick() {
    this.ActiveteAddEditEmployeeComp = false;
    this.refreshEmployee();
  }

  refreshEmployee() {
    this.service.getEmployeesList().subscribe(data => {
      this.EmployeeList = data;
      this.EmployeeListWithoutFilter = data;
    });

  }

  filterFN() {
    if (this.EmployeeNameFilter !== null || this.EmployeeNameFilter !== "") {
      this.EmployeeList = this.EmployeeListWithoutFilter.filter((el: any) => el.EmployeeNameFilter.toString().toLowerCase().includes(this.EmployeeNameFilter.toString().toLowerCase()));
    }
    else {
      this.EmployeeList = this.EmployeeListWithoutFilter;
    }
  }


}
