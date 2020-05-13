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
    @Output() clueHover = new EventEmitter<String>();
  private poem_index: number;

  ids = ids[0];
  // called when the poem changes to a different poem
  @Input() set index(index: number) {
    let clickedClues: HTMLCollectionOf<Element> = document.getElementsByClassName("clicked");
    while (clickedClues.length > 0)
      clickedClues[0].classList.remove("clicked");
    this.poem_index = index;
    this.ids = ids[index];
    this.generateClues();
  }

  downClues: Array<string>;
  acrossClues: Array<string>;

  downIds: Array<string>;
  acrossIds: Array<string>;

  constructor() { }

  ngOnInit(): void { }


  // put the clues into the HTML
  generateClues() {
    // put the clues into the HTML by extracting them from ids[this.poem_index] and reading the ids
    // to determine whether they are across or down
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
        this.downClues.push(key.slice(0, -1) + ". " + ids[this.poem_index][key]["clue"]);
      }
    });
  }

  // switch tabs and which clues (down or across) are visible 
  switch(event: Event): void {
    let tab: Element = (event.target as Element);
    if (!tab.classList.contains("selected") && tab.classList.contains("tab")) {
      let currentSelectedTab: HTMLCollectionOf<Element> = document.getElementsByClassName("selected");


      let currentHiddenClues: HTMLCollectionOf<Element> = document.getElementsByClassName("hidden-clue");
      currentHiddenClues[0].classList.remove("hidden-clue");

      let currentSelectedClues: HTMLCollectionOf<Element>;
      if (currentSelectedTab[0].id == "across") {
        currentSelectedClues = document.getElementsByClassName("across");
      }
      else {
        currentSelectedClues = document.getElementsByClassName("down");
      }
      currentSelectedClues[0].classList.add("hidden-clue");

      currentSelectedTab[0].classList.remove("selected");
      tab.classList.add("selected");
    }

  }

  // emit a notif for other components that a clue was clicked
  trigger(event: Event, id: String): void {
    let clue: Element = (event.target as Element);
    if (!clue.classList.contains("clicked")) {
      clue.classList.add("clicked");
      this.clueSelected.emit(id);
      this.clueHover.emit(null);
    }
  }

  // emit a notif for other components that a clue was hovered
  // and stop the hover event from continuing to propogate
  hover(event: Event, id: String): void {
    event.stopPropagation();
    // strikethrough clicked event
    let clue: Element = (event.target as Element);
    if (!clue.classList.contains("clicked")) {
      this.clueHover.emit(id);
    }
  }

  // stop hover event propogation and end the hover event
  hoverend(event: Event): void {
    event.stopPropagation();
    this.clueHover.emit(null);
  }

}
