import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShortestPath';

  matrixArray:number[][]=[
    [1,0,1,1,1,0],
    [1,0,1,1,1,0],
    [1,0,1,1,1,0],
    [1,0,1,1,1,0],
    [1,0,1,1,1,0]
  ]
}
