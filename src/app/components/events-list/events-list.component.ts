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
  constructor(public http:HttpService) {
  }


  ngOnInit() {
    this.recommendedEvents=this.http.getRecommandedEvents(["CECS","MATH","PHYS"]);
    this.happeningSoonEvents=this.http.getHappeningSoonEvents();
    this.yourMajorEvents=this.http.getYourMajorEvents("CECS");

  }

}