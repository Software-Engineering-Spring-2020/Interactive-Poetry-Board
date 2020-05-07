import { Component, OnInit, Input } from '@angular/core';
import {ids, dimensions, titles} from "../../assets/ts";


/**
 * This Componenet is responsable for displaying the final poem and is located on the bottom of the page
 */
@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  template: `{{ message }}`,
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  //The string that contains the poem (decleration)
  poemText:String;
  private poem_index: number;

  constructor() {
    //defines poemText
    this.poemText = new String();
  }

  @Input() set clue(clue: string) {
    if (clue != null){
      this.addClue(ids[this.poem_index][clue]["clue"]); // Access the clue, as a String, from within the poem's .ts file
    }
  }
  title: String;
  @Input()
  set index(index: number) {
    if (index != null)
    this.poem_index = index;
    this.title = titles[index].toUpperCase();
  }

  ngOnInit(): void {
  }

  addClue(text:String){
    this.poemText+= "\n" + text.toString();
  }



}
