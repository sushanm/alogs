import { Component, OnInit } from '@angular/core';

class Point {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Node {
  pt: number;
  dist: number;
  constructor(pt, dist) {
    this.pt = pt;
    this.dist = dist;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShortestPath';
  source: Point;
  dest: Point;
  ROW: number = 10;
  COL: number = 10;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.matrixArray = this.generateGround(this.ROW, this.COL);
  }

  matrixArray: number[][] = [
    [1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0],
  ];

  d = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ];

  isValid(maze, visited, width, height, row, col) {
    return (
      row >= 0 &&
      row < width &&
      col >= 0 &&
      col < height &&
      maze[row][col] == 1 &&
      !visited[row][col]
    );
  }

  bfs(maze, src, dest) {
    var minDist = -1;
    if (maze[src.x][src.y] != 1 || maze[dest.x][dest.y] != 1) return minDist;
    var h = maze.length;
    var w = maze[0].length;
    let visited = [];
    for (var i = 0; i < h; i++) {
      visited.push([]);
      for (var j = 0; j < w; j++) {
        visited[i].push(false);
      }
    }

    console.log(visited);

    var queue = [];
    var s = new Node(src, 0);
    queue.push(s);

    while (queue.length > 0) {
      var curr = queue.pop();
      var pt = curr.pt;
      if (pt.x == dest.x && pt.y == dest.y) return curr.dist;
      for (var i = 0; i < 4; i++) {
        var row = pt.x + this.d[i].x;
        var col = pt.y + this.d[i].y;
        if (this.isValid(maze, visited, h, w, row, col)) {
          visited[row][col] = true;
          var adjCell = new Node(new Point(row, col), curr.dist + 1);
          queue.push(adjCell);
        }
      }
    }
    console.log(visited);

    return minDist;
  }

  generateGround(height, width) {
    var ground = [];
    for (var y = 0; y < height; y++) {
      ground[y] = [];
      for (var x = 0; x < width; x++) {
        ground[y][x] = tile();
      }
    }
    return ground;

    function tile() {
      return getRandomInt(2);
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }

  clickedPoistion(i, j) {
    if (!this.source) {
      this.source = new Point(i, j);
    } else if (!this.dest) {
      this.dest = new Point(i, j);
    }
    if (this.source && this.dest) {
      var dist = this.bfs(this.matrixArray, this.source, this.dest);
      console.log(dist);
    }
  }
}
