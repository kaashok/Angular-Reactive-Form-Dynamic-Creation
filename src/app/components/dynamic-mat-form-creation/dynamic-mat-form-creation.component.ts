import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, RequiredValidator } from "@angular/forms";


@Component({
  selector: 'app-dynamic-mat-form-creation',
  templateUrl: './dynamic-mat-form-creation.component.html',
  styleUrls: ['./dynamic-mat-form-creation.component.scss']
})
export class DynamicMatFormCreationComponent implements OnInit {

  employeeForm: FormGroup = new FormGroup({});

  formData: any = {
    empName: {
      name: 'Employee Name',
      validators: [Validators.required]
    },
    empEmailId: {
      name: 'Employee Email Id',
      validators: [Validators.required, Validators.email]
    },
    empAge: {
      name: 'Employee Age',
      validators: [Validators.required]
    },
    empPhoneNumber: {
      name: 'Employee Phone No',
      validators: [Validators.required]
    },
    empAddress: {
      name: 'Employee Address',
      validators: [Validators.required]
    },
    empSalary: {
      name: 'Employee Salary',
      Validators: [Validators.required]
    }
  }

  controls: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createEmployeeForm()
  }

  createEmployeeForm() {
    this.controls = Object.keys(this.formData);
    for (const controlName of this.controls) {
      const control: FormControl = new FormControl('')
      this.employeeForm.addControl(controlName, control);
    }
  }

  getControlName(key: string) {
    return this.formData[key].name
  }

}
