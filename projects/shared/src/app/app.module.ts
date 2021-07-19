import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalaryHomeComponent } from '../../../salary/src/app/SalaryHome/home/home.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GlobalProfileComponent } from './global-profile/global-profile.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/Home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'Salary',
//     loadChildren: () => import('./../../../salary/src/app/app.module').then(m => m.AppModule)
//   },
//   {
//     path: 'EmployeeMaster',
//     loadChildren: () => import('./../../../employee-master/src/app/app.module').then(m => m.AppModule)
//   },
//   {
//     path: 'Home',
//     component:HomeComponent
//   }
// ];




const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'salary', component: SalaryHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalNavigationComponent,
    GlobalProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule,GlobalNavigationComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class SharedAppModule { }
