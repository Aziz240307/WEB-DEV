import { Component } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventsListComponent],
  template: `<app-events-list></app-events-list>`
})
export class AppComponent {}
