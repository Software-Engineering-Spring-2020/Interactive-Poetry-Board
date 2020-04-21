import { Component, OnInit } from '@angular/core';
import { ids } from '../yesterdaysNews'

@Component({
  selector: 'app-clues',
  templateUrl: './clues.component.html',
  styleUrls: ['./clues.component.css']
})
export class CluesComponent implements OnInit {
  ids = ids;

  constructor() { }

  ngOnInit(): void {
  }

}
