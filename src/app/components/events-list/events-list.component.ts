import { HttpService } from './../../services/http.service';
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
  recImgs: string[]
  hapImgs: string[]
  mjrImgs: string[]
  constructor(public http:HttpService) {
  }


  ngOnInit() {
    this.recommendedEvents=this.http.getRecommandedEvents(["CECS","MATH","PHYS"]);
    this.happeningSoonEvents=this.http.getHappeningSoonEvents();
    this.yourMajorEvents=this.http.getYourMajorEvents("CECS");

  }
  getRecImage(){
    return recImgs[Math.floor(Math.random()*recImgs.length)]
  }
  getHapImage(){
    return hapImgs[Math.floor(Math.random()*hapImgs.length)]
  }

}


const recImgs = [
  "event_10.jpg",
  "event_11.jpg",
  "event_12.jpg",
  "event_13.jpg",
  "event_14.jpg",
  "event_15.jpg",
  "event_16.jpg",
  "event_17.jpg",
  "event_18.jpg",
  "event_19.jpg",
  "event_20.jpg",
  "event_21.jpg",
  "event_22.jpg",
  "event_23.jpg",
  "event_24.jpg"
];


const hapImgs = [
  "event_1.jpg",
  "event_2.jpg",
  "event_3.jpg",
  "event_4.jpg",
  "event_5.jpg",
  "event_6.jpg",
  "event_7.jpg",
  "event_8.jpg",
];