import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Department} from '../../models/department';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  departmentObs: Observable<Department>;
  department = new Department();

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.setDepartmentObs();
    this.setDepartment();
  }

  private setDepartmentObs() {
    this.departmentObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDepartment(params.get('id')))
    );
  }

  private setDepartment() {
    this.departmentObs.subscribe(department => {
      this.department = department;
    });
  }

  onSubmit(department) {
    this.service.updateDepartment(department).subscribe();
    this.snackBar.open('Department updated successful', 'OK', {
      duration: 2000,
    });
  }
}
