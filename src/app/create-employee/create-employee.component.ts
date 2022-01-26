import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.createEmployee();
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(result  => this.goToEmployeeList(), error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
