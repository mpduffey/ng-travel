import {Component} from '@angular/core';
import {TravelForm} from 'modules/travel-form/travel-form';
import {SearchResults} from 'modules/search-results/search-results';

@Component({
    selector:   'ng-travel',
    directives: [TravelForm, SearchResults],
    template:   `
      <h1>Mike & Morgan's Travel App</h1>
      <div class="row">
        <div class="col-md-3"><trv-form (results)="updateResults($event)"></trv-form></div>
        <div class="col-md-9"><search-results [results]="results"></search-results></div>
      </div>
    `
})
export class AppComponent {
  updateResults = (e) => {
    this.results = e;
  }
}