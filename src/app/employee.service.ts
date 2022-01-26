import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl!: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = "http://localhost:8080/api/v1/employees";
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}`, employee);
  }
}
