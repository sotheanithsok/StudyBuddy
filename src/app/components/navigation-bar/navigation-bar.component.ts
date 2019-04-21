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

  showForm = false;
  @Output()
  onShowForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleForm() {
    this.showForm = !this.showForm;
    this.onShowForm.emit(this.showForm);
    console.log('Sidebar Toggle', this.showForm);
  }    


   //eventClicked = new EventEmitter<Event>();

  /*onClick(event: Event): void {
    this.eventClicked.emit(event);
*/
  
}
