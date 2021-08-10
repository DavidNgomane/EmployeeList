import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  
  {path:'employee-dashboard', component: EmployeeDashboardComponent},
  {path:'statistics', component: StatisticsComponent},
  {path:'' ,component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
