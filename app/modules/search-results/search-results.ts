import {Component, Input} from '@angular/core';
import {TripResult} from 'modules/trip-result/trip-result';

@Component({
	selector:			'search-results',
	template:			`
		<trip-result *ngFor="let trip of results" [trip]="trip"></trip-result>
	`,
	directives:		[TripResult]
})

export class SearchResults {
	@Input() results;
}