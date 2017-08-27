import {Component, Output, EventEmitter} from '@angular/core';
import {TravelService} from 'modules/travel-service/travel-service';
import {NgSelectCtrl} from 'modules/ng-select/ng-select';

@Component({
	selector:		'trv-form',
	template:		`
		Adult Count: <ng-select [options]="countOptions" [(bindModelData)]="req.request.passengers.adultCount"></ng-select><br>
		Child Count: <ng-select [options]="countOptions" [(bindModelData)]="req.request.passengers.childCount"></ng-select><br>
		Infants in Lap: <ng-select [options]="countOptions" [(bindModelData)]="req.request.passengers.infantInLapCount"></ng-select><br>
		Infants in Seat: <ng-select [options]="countOptions" [(bindModelData)]="req.request.passengers.infantInSeatCount"></ng-select><br>
		Senior Count: <ng-select [options]="countOptions" [(bindModelData)]="req.request.passengers.seniorCount"></ng-select><br>
		<button class="btn" (click)="postConsole()">Console</button>
	`,
	providers:	[TravelService],
	directives:	[NgSelectCtrl]
})
export class TravelForm {
	@Output() results = new EventEmitter();
	req =	{
		"request": {
			"passengers": {
				"kind": "qpxexpress#passengerCounts",
				"adultCount": 1,
				"childCount": 0,
				"infantInLapCount": 0,
				"infantInSeatCount": 0,
				"seniorCount": 0
			},
			"slice": [
				{
					"kind": "qpxexpress#sliceInput",
					"origin": "MKE",
					"destination": "LAX",
					"date": "2016-06-20",
					"maxStops": 1,
					"maxConnectionDuration": 500,
					"preferredCabin": "COACH",
					"permittedDepartureTime": {
						"kind": "qpxexpress#timeOfDayRange",
						"earliestTime": "05:00",
						"latestTime": "22:00"
					},
					"permittedCarrier": [],
					"alliance": "",
					"prohibitedCarrier": []
				}
			],
			"maxPrice": "",
			"saleCountry": "US",
			"refundable": false,
			"solutions": 500
		}
	}
	countOptions = [
		{value: 0, label: 0},
		{value: 1, label: 1},
		{value: 2, label: 2},
		{value: 3, label: 3},
		{value: 4, label: 4},
		{value: 5, label: 5},
		{value: 6, label: 6},
		{value: 7, label: 7},
		{value: 8, label: 8}
	]
	constructor(ts: TravelService) {
		this._ts = ts;
	}
	postConsole = () => {
		console.log(this.req);
		this._ts.submitRequest(this.req).subscribe(x => {
			console.log(x);
			this.results.emit(x.trips.tripOption;
		});
	}
}