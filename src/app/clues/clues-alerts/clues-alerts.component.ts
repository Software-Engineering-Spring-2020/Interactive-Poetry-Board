import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-clues-alerts',
  templateUrl: './clues-alerts.component.html',
  styleUrls: ['./clues-alerts.component.css']
})
export class CluesAlertsComponent implements OnInit {
  @Input() puzzleObject;
  constructor() { }

  ngOnInit(): void {
  }

}
