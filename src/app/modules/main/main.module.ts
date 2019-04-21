import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { EventDetailComponent } from '../../components/event-detail/event-detail.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { EventsListComponent } from '../../components/events-list/events-list.component';
import { EventFormComponent } from '../../components/event-form/event-form.component';
import { NgbModalModule, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MainComponent, EventDetailComponent, NavigationBarComponent, FilterBarComponent, EventsListComponent, EventFormComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModalModule
    //NgbCalendar
  ]
})
export class MainModule { }
