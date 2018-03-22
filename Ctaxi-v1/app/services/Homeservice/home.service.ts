import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {
	editData(data: any) {
		for (let driver of data) {
			let monthes = this.getMonths(driver.dateCheck)
			driver.color = this.giveColor(monthes);
			driver.dateBegindays = this.getDays(driver.dateBegin);

		}
		return (data)
	}



	getMonths(date1:any) {
		let dateNow = new Date(Date());
		let dateCheckSplit = date1.substring(0, 10).split("-").reverse()
		let dateBegin = new Date(dateCheckSplit[1] + "/" + dateCheckSplit[0] + "/" + dateCheckSplit[2]);
	    return this.monthDiff(dateBegin);

	}
	getDays(date1: any) {
		let dateNow = new Date(Date());
		let dateBeginSplit = date1.substring(0, 10).split("-").reverse()
		let dateBegin = new Date(dateBeginSplit[1] + "/" + dateBeginSplit[0] + "/" + dateBeginSplit[2]);
		return Math.ceil((Math.abs(dateNow.getTime() - dateBegin.getTime())) / (1000 * 60 * 60 * 24));
	}

	giveColor(monthes: any) {
		if (monthes >= 5) { if (monthes >= 6) { return "red" } return "blue" } else { return "white" }
	}

	 monthDiff(d1:any) {
	let months;
	let months1;
	let dateNow = new Date(Date());
	months = (dateNow.getFullYear() - d1.getFullYear()) * 12;
		 months1 = dateNow.getMonth() - d1.getMonth();
		 months += months1;

		 if (dateNow.getDate() < d1.getDate()) {

			 months--;
		 }


	return months
}


	checkValidations(json: any) {
		for (let index in json) {
			if (!json[index] || !parseInt(json.licenseNum) || !parseInt (json.phoneNum)) {
				return false;
			}
		}
		return true;
	}
}