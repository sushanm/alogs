import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor() { }


  
  GetEmployeeProfileInfo(): Observable<EmployeeProfileInfo> {
    let employeeCode = this.GetLoggedinEmployeeCode();
    if(employeeCode==""){
      //this.logOutUser();
    }
    let url = this.commonApiUrl + 'GetEmployeeProfileInfo?employeeCode=' + employeeCode;
    return this.http
      .get<EmployeeProfileInfo>(url)
      .pipe(retry(1), catchError(this.errorHand));
  }

}
