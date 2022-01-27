import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforEmployeeComponent } from './infor-employee.component';

describe('InforEmployeeComponent', () => {
  let component: InforEmployeeComponent;
  let fixture: ComponentFixture<InforEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
