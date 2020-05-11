import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import {ids, dimensions, titles} from "../../assets/ts";
//import { get } from "scriptjs";
declare var reset: any;
declare var reveal: any;
declare var getCells: any;
declare var fullPopulate: any;


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  //ids = ids;
  crossword: Object[][];
  prev_crossword: Object[][];
  private poem_index: number;
  hovered:Object;
  pair:Object[] = new Array<Object>();

  //Use to trigger event
  @Input() set clue(clue: string) {
    reveal(ids[this.poem_index], this.crossword, clue);
  }
  /*@Input() set hover(clue: string) {
    if(clue != null){
      this.hovered = [ids[this.poem_index][clue]["startY"],ids[this.poem_index][clue]["startX"]];
    }
  }*/

  @Input() set hover(clue: string) {
    this.pair = [];
    if(clue != null){
      let {y, x} = getCells(ids[this.poem_index], clue);
      for(var i=0; i< x.length; i++){
        this.pair.push([y[i], x[i]]);
      }
    }
    else this.crossword = this.crossword;
  }

  //Use to hard display info
  //@Input('index') index: Number;
  @Input()
  set index(index: number) {
    this.poem_index = index;
    this.createTable(dimensions[index]);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  createTable(dimensions){
    this.crossword = new Array<Array<Object>>();
    for (let y = 0; y < dimensions[0]; y++) {
      let row:Object[]  = new Array<Object>();
      for (let x = 0; x < dimensions[1]; x++){
        row.push(null);
      }
      this.crossword.push(row);
    }
    this.prev_crossword = this.crossword.map(function(arr) {
      return arr.slice();});
    this.reset();
  }

  reset(){
    reset(ids[this.poem_index], this.crossword);
  }

  revealPrompt(){
    reveal(ids[this.poem_index], this.crossword, prompt("Enter ID","18d"));
  }

  fullPopulate(){
    fullPopulate(ids[this.poem_index], this.crossword);
  }

  isNumber(val): boolean { return typeof val == 'number'; }
  isHovered(val, i, j): boolean {
    var result = false;
    this.pair.forEach(element => {
      if (element != null && i==element[0] && j==element[1])  result = true;
    });
    return result;
  }
  /*isHovered(val, i, j): boolean {
    return (this.hovered != null && i==this.hovered[0] && j==this.hovered[1]);
  }*/

  @ViewChildren('grid') grid: QueryList<any>;
  ngAfterViewInit() {
    this.grid.changes.subscribe(t => {
      this.ngForRendred();
    })
  }

  ngForRendred() {
    this.prev_crossword = this.crossword.map(function(arr) {
      return arr.slice();});
  }

  compareArrays(val, i, j): boolean {
    return val!=this.prev_crossword[i][j];
    }
}
