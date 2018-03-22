import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Http } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	drivers: any;

	constructor(public http: Http) {
	
	}
	getDrivers() {
		return this.http.get
		('api/Drivers/').map(res =>
		res.json())
	}

	getDriver(id:any) {
		return this.http.get
			('api/Drivers/'+id).map(res =>
				res.json())

	}
	
	deleteDriver(id:number) {
		{
			let headers = new Headers({ 'Content-Type': 'application/json' });
			let options = new RequestOptions({ headers: headers });
			return this.http.delete
				('api/Drivers/' + id, options).map(res =>
					res.json())
		}	
	}

	addDriver(json: any) {
		json=JSON.stringify(json);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post('api/Drivers/', json, options).map(res =>
			res.json())
	}

	updateDriver(json: any, id: any) {
		json = JSON.stringify(json);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.put('api/Drivers/', json, options).map(res =>
			res.json())
	}

	login(username: string, password: string) {
		let json = { username, password }
		let body: any = JSON.stringify(json);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post
			('api/User/', body, options).map(res =>
				res.json())
	}

}

	
