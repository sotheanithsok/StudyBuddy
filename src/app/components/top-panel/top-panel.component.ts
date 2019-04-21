import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  @Output() requestSearch = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  startSearch(searchValue:String){
    this.requestSearch.emit(searchValue)
  }

}
