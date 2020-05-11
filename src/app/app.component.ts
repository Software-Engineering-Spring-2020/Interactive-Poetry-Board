import { Component, OnInit } from '@angular/core';
import {ids, dimensions, titles} from "../assets/ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Interactive-Poetry-Board';
  titles = titles.map(function(x){ return x.toUpperCase() });

  /*public poem_title: String;
  public poem_dimensions: Number[];
  public poem_ids: {};*/

  public poem_title = titles[0];
  public poem_dimensions = dimensions[0];
  public poem_ids = ids[0];

  ngOnInit(): void {
    let refreshNoteSeen = localStorage.getItem('refreshNote') || '';
    if (refreshNoteSeen == 'seen') {
      let refreshNote: HTMLElement = document.getElementById("refresh-note");
      refreshNote.classList.add("hidden");
    }
    else {
      localStorage.setItem('refreshNote', 'seen');
    }
    console.log(localStorage.getItem('refreshNote'));
  }

  dismissRefreshNote() {
    let refreshNote: HTMLElement = document.getElementById("refresh-note");
    refreshNote.classList.add("hidden");
  }

  toggle(to: string): void {
    // This is not the best way to do this.
    let toElement: HTMLElement = document.getElementById(to);
    let fromElement: HTMLElement;
    toElement.classList.remove('hidden');
    if (to == 'about-and-credits') {
      fromElement = document.getElementById('puzzle');
      this.adjustWidth(false);
    }
    else {
      fromElement = document.getElementById('about-and-credits');
      this.adjustHome();
    }
    fromElement.classList.add('hidden');
  }

  onResize(event){
    if(event.target.innerWidth <= 600){
      document.getElementsByClassName('left')['static-about'].style.width = "100%";
      document.getElementsByClassName('right')['static-credits'].style.width = "100%";
      document.getElementsByTagName('div')['home'].style.width = "50%";
      document.getElementsByTagName('div')['website'].style.width = "50%";
    }
    else {
      this.adjustWidth(true);
      this.adjustHome();
    }
  }

  adjustHome(){
    var left = document.getElementsByTagName('div')['left'],
        right = document.getElementsByTagName('div')['right'];
    if(left.clientHeight > right.clientHeight){
      left.classList.add('left'); //OR element.getBoundingClientRect().height
      right.classList.remove('right');
    }
    else{
      left.classList.remove('left');
      right.classList.add('right');
    }
  }

  adjustWidth(resize){
    let about = document.getElementsByTagName('div')['static-about'],
        credits = document.getElementsByTagName('div')['static-credits'],
        left = document.getElementsByClassName('left')['static-about'],
        right = document.getElementsByClassName('right')['static-credits'],
        home = document.getElementsByTagName('div')['home'],
        website = document.getElementsByTagName('div')['website'],
        center = 50,
        offset = 0,
        deviation = 15;
    if(document.body.clientWidth > 600){
      left.style.width = (center+offset)+"%";
      right.style.width = (center-offset)+"%";
      home.style.width = (center+offset)+"%";
      website.style.width = (center-offset)+"%";
      while(about.clientHeight>credits.clientHeight){
        if(about.clientHeight>credits.clientHeight) offset+=.1;
        else offset-=.1;
        left.style.width = (center+offset)+"%";
        right.style.width = (center-offset)+"%";
        home.style.width = (center+offset)+"%";
        website.style.width = (center-offset)+"%";
      }
    }
    //alert(about.clientHeight+" "+credits.clientHeight);
  }

  public clue: String;
  onEvent(id: String){
    this.clue = id;
  }

  public hover: String;
  onHover(id: String){
    this.hover = id;
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
