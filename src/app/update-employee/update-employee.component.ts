import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private employeeService: EmployeeService, 
    private route: ActivatedRoute,
    private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.employeeService.getEmployees(this.id).subscribe(data => this.employee = data, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      result  => this.goToEmployeeList(), 
      error => console.log(error)
      );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
