import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  // selector:'ngbd-datepicker-popup',
  // templateUrl:'./datepicker-popup.html'
})
// export class NgbDatepickerPopup{
//   model;

export class EventFormComponent implements OnInit {
  closeResult: string;
  constructor( ) { }

  ngOnInit() {
  }

}
