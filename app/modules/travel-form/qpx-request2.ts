/* export class PassengerCounts {
	let kind: string = "qpxexpress#passengerCounts";
	let adultCount: number;
	let childCount: number;
	let infantInLapCount: number;
	let infantInSeatCount: number;
	let seniorCount: number;
}

export class TimeOfDayRange {
	let kind: string = "qpxexpress#timeOfDayRange";
	let earliestTime: string;
	let latestTime: string;
}

export class SliceInput {
	constructor = (
		origin: string,
		destination: string,
		date: string,
		maxStops: number,
		maxConnectionDuration: number,
		preferredCabin: string,
		permittedDepartureTime: TimeOfDayRange,
		permittedCarrier: Array<string>,
		alliance: string,
		prohibitedCarrier: Array<string>
	) => {
		this.kind: string = "qpxexpress#sliceInput";
	}
} */

export class QPXRequest {
	constructor(
//		passengers: PassengerCounts,
//		slice: Array<SliceInput>,
		public maxPrice: string,
		public saleCountry: string,
		public refundable: boolean,
		public solutions: number
	) {}
}