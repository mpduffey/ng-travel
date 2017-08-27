import {Component, Input} from '@angular/core';

@Component({
	selector:			'leg',
	template:			`
		<div class="col-md-3 align-right"><span class="bold-text">{{leg.departureTime | date:"shortTime"}}</span></div>
		<div class="col-md-2 align-center">{{leg.origin}}</div>
		<div class="col-md-2"><i class="fa fa-arrow-right"></i></div>
		<div class="col-md-3"><span class="bold-text">{{leg.arrivalTime | date:"shortTime"}}</span></div>
		<div class="col-md-2">{{leg.destination}}</div>
	`,
	styles:				[`
		.bold-text {font-weight: bold;}
		.align-right {text-align: right;}
		.align-center {text-align: center;}
	`]
})

export class Leg {
	@Input() leg;
}