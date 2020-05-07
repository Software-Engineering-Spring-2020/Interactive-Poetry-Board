import { Component } from '@angular/core';
import {ids, dimensions, titles} from "../assets/ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive-Poetry-Board';
  titles = titles.map(function(x){ return x.toUpperCase() });

  /*public poem_title: String;
  public poem_dimensions: Number[];
  public poem_ids: {};*/

  public poem_title = titles[0];
  public poem_dimensions = dimensions[0];
  public poem_ids = ids[0];

  toggle(to: string): void {
    // This is not the best way to do this.
    let toElement: HTMLElement = document.getElementById(to);
    let fromElement: HTMLElement;
    toElement.classList.remove('hidden');
    if (to == 'about-and-credits') {
      fromElement = document.getElementById('puzzle');
    }
    else {
      fromElement = document.getElementById('about-and-credits');
    }
    fromElement.classList.add('hidden');
  }

  public clue: String;
  onEvent(id: String){
    this.clue = id;
  }

  public name = "";
  print(){
    var value = document.getElementsByTagName('input')['name'].value;
    if(value != "") this.name = value;
    else this.name = prompt("Please enter your name", "");
    var base = document.getElementById('credits').innerHTML;
    if(this.name != "") document.getElementById('credits').innerHTML += " and "+this.name;
    print();
    document.getElementById('credits').innerHTML = base;
  }

  public index = 0;
  selectEvent(){
    this.poem_title = titles[document.getElementsByTagName("select")['poem_select'].selectedIndex];
    this.poem_dimensions = dimensions[document.getElementsByTagName("select")['poem_select'].selectedIndex];
    this.poem_ids = ids[document.getElementsByTagName("select")['poem_select'].selectedIndex];
    this.index = document.getElementsByTagName("select")['poem_select'].selectedIndex;
  }

}
