import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.css']
})
export class GlobalNavigationComponent implements OnInit {

  constructor() { }

  // globalNavigartionLinks = [
  //   { "title": "SPA Home", "description": "dd", "link": "http://10.35.183.7:81/SPADev1/" }, 
  //   { "title": "Salary", "description": "dd", "link": "http://10.35.183.7:81/SPADev1/Salary/" }];

    globalNavigartionLinks = [
      { "title": "SPA Home", "description": "dd", "link": "http://localhost:4200/" }, 
      { "title": "Salary", "description": "dd", "link": "http://localhost:4201/Salary/" }];
  

  ngOnInit(): void {
  }

}
