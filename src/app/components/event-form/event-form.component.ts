import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { Variable, Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  // selector:'ngbd-datepicker-popup',
  // templateUrl:'./datepicker-popup.html'
})




export class EventFormComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  @ViewChild('content') content

  ngOnInit() {
  }

  @Input() showDetails: boolean;

  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
