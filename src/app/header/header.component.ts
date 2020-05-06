import { Component, OnInit, Input } from '@angular/core';
import {ids, dimensions, titles} from "../../assets/ts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String;
  @Input() set index(index: number) {
    this.title = titles[index].toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
