import { Event } from './../../models/event';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  closeResult: string;
  recommendedEvents: Event[]
  happeningSoonEvents: Event[]
  yourMajorEvents:Event[]
  constructor() {
  }


  ngOnInit() {

    this.recommendedEvents = [{
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT-1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT0"

    }, {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT2"

    }]



    this.happeningSoonEvents = [{
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT-1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT0"

    }, {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT2"

    }]


    this.yourMajorEvents = [{
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT-1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT0"

    }, {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT1"

    },
    {
      id: "a",
      class: "b",
      instructor: "c",
      duration: 123,
      location: "CSULB",
      topic: ["1", "2", "3"],
      date: 222,
      description: "asdfaf",
      currentCapacity: 0,
      maxCapacity: 20,
      organizer: "Mr. John",
      title:"TTTTTT2"

    }]
  }

}