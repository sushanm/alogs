import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../../../shared/src/app/global-configuration';

@Component({
  selector: 'app-manager-salary-parent',
  templateUrl: './manager-salary-parent.component.html',
  styleUrls: ['./manager-salary-parent.component.css']
})
export class ManagerSalaryParentComponent implements OnInit {

  constructor() { }
  baseApiUrl;
  ngOnInit(): void {

    this.baseApiUrl = GlobalVariable.BASE_API_URL;
  }

}
