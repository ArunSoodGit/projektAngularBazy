import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeFormComponent} from './forms/employee-form/employee-form.component';
import {TabsComponent} from './tabs/tabs.component';
import {JobFormComponent} from './forms/job-form/job-form.component';
import {DepartmentFormComponent} from './forms/department-form/department-form.component';
import {CountriesFormComponent} from './forms/countries-form/countries-form.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeFormComponent
  },
  {
    path: 'job/:id',
    component: JobFormComponent
  },
  {
    path: 'department/:id',
    component: DepartmentFormComponent
  },
  {
    path: 'country/:id',
    component: CountriesFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
