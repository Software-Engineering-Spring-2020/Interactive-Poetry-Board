import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
//import {ids} from "../../assets/ts";
import {ids, dimensions, titles} from "../../assets/ts";

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {
  @Output() clueSelected = new EventEmitter<String>();
  private poem_index: number;

  ids = ids[0];
  @Input() set index(index: number) {
    let clickedClues: HTMLCollectionOf<Element> = document.getElementsByClassName("clicked");
    while (clickedClues.length > 0)
      clickedClues[0].classList.remove("clicked");
    this.poem_index = index;
    this.ids = ids[index];
    this.generateClues();
  }

  //ids = ids; //what is the right type???
  //ids = ids[0];
  downClues: Array<string>;
  acrossClues: Array<string>;

  downIds: Array<string>;
  acrossIds: Array<string>;

  constructor() {
    //this.generateClues();
   }

  ngOnInit(): void {
  }

  generateClues(){
    let idsKeys: Array<string> = Object.keys(ids[this.poem_index]);
    let collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'}); //type it
    idsKeys = idsKeys.sort(collator.compare);
    this.acrossIds = new Array<string>();
    this.downIds = new Array<string>();
    this.acrossClues = new Array<string>();
    this.downClues = new Array<string>();
    idsKeys.forEach(key => {
      if (key.charAt(key.length - 1) == 'a') {
        this.acrossIds.push(key);
        this.acrossClues.push(key.slice(0, -1) + ". " + ids[this.poem_index][key]["clue"]);
      }
      else {
        this.downIds.push(key);
        console.log(key);
        console.log(this.downClues);
        this.downClues.push(key.slice(0, -1) + ". " + ids[this.poem_index][key]["clue"]);
      }
    });
  }

  switch(event: Event): void {
    let tab: Element = (event.target as Element);
    if (!tab.classList.contains("selected") && tab.classList.contains("tab")) {
      let currentSelectedTab: HTMLCollectionOf<Element> = document.getElementsByClassName("selected");


      let currentHiddenClues: HTMLCollectionOf<Element> = document.getElementsByClassName("hidden");
      currentHiddenClues[0].classList.remove("hidden");

      let currentSelectedClues: HTMLCollectionOf<Element>;
      if (currentSelectedTab[0].id == "across") {
        currentSelectedClues = document.getElementsByClassName("across");
      }
      else {
        currentSelectedClues = document.getElementsByClassName("down");
      }
      currentSelectedClues[0].classList.add("hidden");

      currentSelectedTab[0].classList.remove("selected");
      tab.classList.add("selected");
    }

  }

  trigger(event: Event, id: String): void {
    // strikethrough clicked event
    let clue: Element = (event.target as Element);
    if (!clue.classList.contains("clicked")) {
      clue.classList.add("clicked");
      // alert parent
      this.clueSelected.emit(id);
    }
  }

}
