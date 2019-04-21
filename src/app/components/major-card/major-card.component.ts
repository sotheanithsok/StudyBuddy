import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-major-card',
  templateUrl: './major-card.component.html',
  styleUrls: ['./major-card.component.css']
})

export class MajorCardComponent implements OnInit {
  @Input() major: String;
  @Input() imgFile: String;

  constructor() { }

  ngOnInit() {
    // console.log(this.major);
  }

}
