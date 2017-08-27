import {Component, Input} from '@angular/core';
import {Leg} from 'modules/leg/leg';
import {MinutesToHoursPipe} from 'modules/min-to-hours/min-to-hours';

@Component({
	selector:			'segment',
	template:			`
		<div class="row">
			<div class="col-md-6"><leg *ngFor="let leg of segment.leg" [leg]="leg"></leg></div>
			<div class="col-md-6">{{segment.duration | minToHrs}}  {{segment.flight.carrier}} Flight #: {{segment.flight.number}} {{segment.cabin}} <span *ngIf="segment.connectionDuration"> Layover: {{segment.connectionDuration | minToHrs}}</span></div>
		</div>
	`,
	directives:		[Leg],
	pipes:				[MinutesToHoursPipe],
	styles:				[`
		p {
			margin: 0;
		}
	`]
})

export class Segment {
	@Input() segment;
}