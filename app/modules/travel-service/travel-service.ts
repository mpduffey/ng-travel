import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
	viewProviders: [HTTP_PROVIDERS]
})

export class TravelService {
	constructor(http: Http) {
		this.http = http;
	}
	
	submitRequest = (req) => {
		return this.http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDhIDFlOPzMkKH2FVLo_x9wWV34ZgwN428", req)
			.map(res => res.json());
	}
}