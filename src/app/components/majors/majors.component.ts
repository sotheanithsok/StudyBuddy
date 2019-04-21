import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {
  majorList: String[];
  imgFileList: String[];

  constructor() { }

  ngOnInit() {
    this.majorList = [
      "Art History","Computer Science","Astronomy",
      "Food Science","Music","Linguistics",
      "Biology","Physics","African Studies",
      "Accounting","Cambodian Studies","Dance"
    ];
    this.imgFileList = [
      "art_history.jpg","computer_science_1.jpg","astronomy.jpg",
      "food_science.jpg","music.jpg","linguistics.jpg",
      "biology.jpg","physics.jpg","african_study.jpg",
      "accounting.jpg","cambodian.jpg","dance.jpg"
    ];
  }

}
