import { Component, OnInit, Input } from '@angular/core';
import { ids } from '../yesterdaysNews';
import { dimensions } from '../yesterdaysNews';
//import { get } from "scriptjs";
declare var reset: any;
declare var reveal: any;
declare var fullPopulate: any;


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  ids = ids;
  crossword: String[][];

  //Use to hard display info
  //@Input() childEvent: String;

  //Use to trigger event
  @Input()
  set clue(clue: String) {
    reveal(ids, this.crossword, clue);
  }

  constructor() {
    this.crossword = new Array<Array<String>>();
    for (let y = 0; y < dimensions[0]; y++) {
      let row:String[]  = new Array<String>();
      for (let x = 0; x <dimensions[1]; x++){
        row.push(null);
      }
      this.crossword.push(row);
    }
    this.reset();
  }

  ngOnInit(): void {
    //createTable(40,40);
  }

  reset(){
    reset(ids, this.crossword);
  }

  revealPrompt(){
    reveal(ids, this.crossword, prompt("Enter ID","18d"));
  }

  fullPopulate(){
    fullPopulate(ids, this.crossword);
  }
}
