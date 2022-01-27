import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { InforEmployeeComponent } from './infor-employee/infor-employee.component';

const routes: Routes = [
  {
    path: 'employees', 
    component: EmployeeListComponent
  },
  {
    path: 'add', 
    component: CreateEmployeeComponent
  },
  {
    path: "employee/:id/edit", 
    component: UpdateEmployeeComponent
  },
  {
    path: "employee/:id/detail", 
    component: InforEmployeeComponent
  },
  {
    path: '', 
    redirectTo: 'employees', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
