import { Component, OnInit, Input } from '@angular/core';


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

  @Input() childMessage: string;

  constructor() {
    //defines poemText
    this.poemText = new String();
  }

  ngOnInit(): void {
    this.addClue("testOfClueAddFunction");
  }

  addClue(text:String){
    this.poemText+= "\n" + text.toString();
  }



}
