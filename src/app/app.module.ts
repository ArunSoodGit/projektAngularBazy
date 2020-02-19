import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatSelectModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CountriesListComponent } from './lists/countries-list/countries-list.component';
import { DepartmentListComponent } from './lists/department-list/department-list.component';
import { EmployeesListComponent } from './lists/employees-list/employees-list.component';
import { JobsListComponent } from './lists/jobs-list/jobs-list.component';
import { CountriesFormComponent } from './forms/countries-form/countries-form.component';
import { DepartmentFormComponent } from './forms/department-form/department-form.component';
import { EmployeeFormComponent } from './forms/employee-form/employee-form.component';
import { JobFormComponent } from './forms/job-form/job-form.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    DepartmentListComponent,
    EmployeesListComponent,
    JobsListComponent,
    CountriesFormComponent,
    DepartmentFormComponent,
    EmployeeFormComponent,
    JobFormComponent,
    TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
