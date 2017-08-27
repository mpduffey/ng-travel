import {Component, Input} from '@angular/core';
import {Slice} from 'modules/slice/slice';
import {ConvertToNumberPipe} from 'modules/number-pipe/number-pipe';

@Component({
	selector:			'trip-result',
	template:			`
		<div class="row">
			<div class="col-md-2 center-text"><h2>{{trip.saleTotal.replace('USD','') | convertToNumber | currency:'USD':true:'1.2-2'}}</h2></div>
			<div class="col-md-10"><slice *ngFor="let slc of trip.slice" [slice]="slc"></slice></div>
		</div>
	`,
	directives:		[Slice],
	pipes:				[ConvertToNumberPipe],
	styles:				[`
		p {margin: 0;}
		div.row {
			border: thin lightgray solid;
			margin: -1px 0 0 0;
		}
		.center-text {
			text-align: center;
			vertical-align: middle;
		}
	`]
})

export class TripResult {
	@Input() trip;
}