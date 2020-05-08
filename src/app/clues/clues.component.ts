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
  downIds: Array<String>;
  acrossIds: Array<String>;

  constructor() {
    //this.generateClues();
   }

  ngOnInit(): void {
  }

  generateClues(){
    let idsKeys: Array<String> = Object.keys(this.ids);
    let collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'}); //type it
    idsKeys = idsKeys.sort(collator.compare);
    this.acrossIds = new Array<String>();
    this.downIds = new Array<String>();
    idsKeys.forEach(key => {
      if (key.charAt(key.length - 1) == 'a') {
        this.acrossIds.push(key);
      }
      else {
        this.downIds.push(key);
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
