import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Shared/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: ServiceService, private formemployee: FormBuilder) { }

  public addEmployeeForm!: FormGroup;

  @Input() employee: any;
  EmployeeID!: string;
  EmployeeName!: string;
  StartDate!: string;
  Position!: string;
  EmpAddress!: string;
  EmpPhone!: string;
  EmpDateOfBirth!: string;

  ngOnInit(): void {
    this.EmployeeID = this.employee.EmployeeID;
    this.EmployeeName = this.employee.EmployeeName;
    this.StartDate = this.employee.StartDate;
    this.Position = this.employee.Position;
    this.EmpAddress = this.employee.EmpAddress;
    this.EmpPhone = this.employee.EmpPhone;
    this.EmpDateOfBirth = this.employee.EmpBirthday;

    this.addEmployeeForm = this.formemployee.group(
      {
        EmployeeName: ['', Validators.required],
        StartDate: ['', Validators.required],
        Position: ['', Validators.required],
        EmpAddress: ['', Validators.required],
        EmpPhone: ['', Validators.required],
        EmpDateOfBirth: ['', Validators.required]
      })
  }

  addEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Position: this.Position,
      StartDate: this.StartDate,
      EmpAddress: this.EmpAddress,
      EmpPhone: this.EmpPhone,
      EmpDateOfBirth: this.EmpDateOfBirth,
    };
    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Position: this.Position,
      StartDate: this.StartDate,
      EmpAddress: this.EmpAddress,
      EmpPhone: this.EmpPhone,
      EmpDateOfBirth: this.EmpDateOfBirth,
    };
    this.service.updateEmployee(val).subscribe((res) => {
      alert("Done");
      //Swal.fire(
      //{
      //icon: 'success',
      //title: 'Updated',
      //text: 'Updated Successfully'
      //})
    });
  }
}