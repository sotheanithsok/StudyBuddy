import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Event } from '../../models/event';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  onShowForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleForm() {
    this.onShowForm.emit();
  }    


   //eventClicked = new EventEmitter<Event>();

  /*onClick(event: Event): void {
    this.eventClicked.emit(event);
*/
  
}
