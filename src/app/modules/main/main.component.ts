import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild ('formElement') formElement;
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
}
  startSearch(searchValue:String){
    console.log("Main is starting to search for "+searchValue)
  }
  openForm(){
      this.formElement.open();
    
  }


}
