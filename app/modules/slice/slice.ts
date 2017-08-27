import {Component, Input} from '@angular/core';
import {Segment} from 'modules/segment/segment';
import {MinutesToHoursPipe} from 'modules/min-to-hours/min-to-hours';

@Component({
	selector:			'slice',
	template:			`
		{{slice.duration | minToHrs}}
		<segment *ngFor="let seg of slice.segment" [segment]="seg"></segment>
	`,
	directives:		[Segment],
	pipes:				[MinutesToHoursPipe],
	styles:				[`
		p {
			margin: 0;
		}
	`]
})

export class Slice {
	@Input() slice;
}