import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExternalAppsModule } from 'projects/external-apps/src/lib/external-apps.module';

import { RouterModule, Routes } from '@angular/router';
import { ManagerSalaryParentComponent } from './ManageSalaryData/manager-salary-parent/manager-salary-parent.component';
import { MonthlySalaryParentComponent } from './MonthlySalary/monthly-salary-parent/monthly-salary-parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalaryHomeComponent } from './SalaryHome/home/home.component';
import { GlobalNavigationComponent } from 'projects/shared/src/app/global-navigation/global-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedAppModule } from 'projects/shared/src/app/app.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


// const routes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {path: 'managesalary', component: ManagerSalaryParentComponent, outlet: 'salary'},
//       {path: 'MonthlySalary', component: MonthlySalaryParentComponent, outlet: 'salary'}
//     ]
//   }
// ];

const routes: Routes = [
  { path: '', component: SalaryHomeComponent, outlet: 'salary' },
  { path: 'home', component: SalaryHomeComponent, outlet: 'salary' },
  { path: 'managesalary', component: ManagerSalaryParentComponent, outlet: 'salary' },
  { path: 'monthlysalary', component: MonthlySalaryParentComponent, outlet: 'salary' },   
  
];

@NgModule({
  declarations: [
    AppComponent,
    ManagerSalaryParentComponent,
    MonthlySalaryParentComponent,
    SalaryHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExternalAppsModule,
    SharedAppModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
