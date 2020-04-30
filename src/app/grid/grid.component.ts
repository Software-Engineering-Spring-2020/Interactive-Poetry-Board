import { Component, OnInit } from '@angular/core';
import { ids } from '../yesterdaysNews';
//import { get } from "scriptjs";
declare var createTable: any;
declare var finalize: any;


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  ids = ids;
  crossword: String[][];

  constructor() {
    this.crossword = new Array<Array<String>>();
    for (let y = 0; y < 40; y++) {
      let row:String[]  = new Array<String>();
      for (let x = 0; x <40; x++){
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
    for (let key in ids) {
      let value = ids[key];
      let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
      let number = key.substring(0, key.length-1);
      this.crossword[value["startY"]][value["startX"]] = number;
      if(key.charAt(key.length-1) == "d") {
        for(var i=0; i<chars.length; i++){
          this.crossword[value["startY"]+i+1][value["startX"]] = '|';
        }
      }
      else{
        for(var i=0; i<chars.length; i++){
          this.crossword[value["startY"]][value["startX"]+i+1] = '|';
        }
      }
    }
  }

  revealPrompt(){
    this.reveal(prompt("Enter ID","18d"));
  }

  reveal(id){
    let value = ids[id];
    let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
    if(id.charAt(id.length-1) == "d") {
      for(var i=0; i<chars.length; i++){
        this.crossword[value["startY"]+i+1][value["startX"]] = chars[i].toString();
      }
    }
    else{
      for(var i=0; i<chars.length; i++){
        this.crossword[value["startY"]][value["startX"]+i+1] = chars[i].toString();
      }
    }
  }

  fullPopulate(){
    for (let key in ids) {
      let value = ids[key];
      let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
      let number = key.substring(0, key.length-1);
      this.crossword[value["startY"]][value["startX"]] = number;
      if(key.charAt(key.length-1) == "d") {
        for(var i=0; i<chars.length; i++){
          let c = chars[i].toString();
          if(c.charCodeAt(0)==32) c = '|';
          this.crossword[value["startY"]+i+1][value["startX"]] = c;//chars[i].toString().charCodeAt(0).toString();
        }
      }
      else{
        for(var i=0; i<chars.length; i++){
          let c = chars[i].toString();
          if(c.charCodeAt(0)==32) c = '|';
          this.crossword[value["startY"]][value["startX"]+i+1] = c;//chars[i].toString().charCodeAt(0).toString();
        }
      }
    }
  }
}
