import { Event } from './../../models/event';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event

  title: string
  date: string
  location: string
  class: string
  capacity: string


  closeResult: string;
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    if (this.event) {
      this.title = this.event.title
      this.location = "@" + this.event.location
      this.date = this.timeConverter(this.event.date)
      this.class = "Class: " + this.event.class;
      this.capacity = "Capacity: " + this.event.currentCapacity + "/" + this.event.maxCapacity;

    }
  }

  //open event-detail modal
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = 'Closed with: ${result}';
      }, (reason) => {
        this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else {
      return 'with: ${reason}';
    }
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return 'with: ${reason}';
    // }
  }

  timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = month + ' ' + date + ',' + year + " @" + this.pad(hour, 2) + ":" + this.pad(min, 2);
    return time;
  }
  pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
