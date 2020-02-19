import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../models/employee';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeObs: Observable<Employee>;
  employee = new Employee();

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.setEmployeeObs();
    this.setEmployee();
  }

  private setEmployeeObs() {
    this.employeeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    );
  }

  private setEmployee() {
    this.employeeObs.subscribe(employee => {
      this.employee = employee;
    });
  }

  onSubmit(employee) {
    this.service.updateEmployee(employee).subscribe();
    this.snackBar.open('employee updated successful', 'OK', {
      duration: 2000,

    });
  }

}
