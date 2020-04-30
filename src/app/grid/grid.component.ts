import { Component, OnInit } from '@angular/core';
import { ids } from '../yesterdaysNews'
//import { get } from "scriptjs";
declare var createTable: any;
declare var finalize: any;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  ids = ids;
  constructor() {
    let idsKeys: Array<String> = Object.keys(ids);
    let collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'}); //type it
    idsKeys = idsKeys.sort(collator.compare);
    idsKeys.forEach(key => {
      //alert(key.id);
    });
  }

  ngOnInit(): void {
    createTable(40,40);
  }

  finalize(){
    finalize();
  }
}
