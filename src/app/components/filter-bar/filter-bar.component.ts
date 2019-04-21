import { HttpService } from './../../services/http.service';
import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  public suggestedResult = []

  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.http.getPossibleClasses().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  @ViewChild('inputField') inputElement

  @Output() requestSearch = new EventEmitter<String>();

  constructor( public http:HttpService) { }

  ngOnInit() {

  }

  searching() {
    let searchValue:String=this.inputElement.nativeElement.value;
    if(searchValue.trim().length>0){
      this.requestSearch.emit(searchValue);
    }

  }

}
