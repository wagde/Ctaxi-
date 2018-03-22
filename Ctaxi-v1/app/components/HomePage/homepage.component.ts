import { Component, NgZone } from '@angular/core';
import { DataService } from '../../services/Dataservice/data.service';
import { HomeService } from '../../services/Homeservice/home.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-homepage',
	templateUrl: './app/components/HomePage/homepage.component.html',
	styleUrls: ['./app/components/HomePage/homepage.component.css']
})

export class HomepageComponent {
	drivers: any[];
	dates: any[];
	DeleteInfo: any = { id1: "", id2: "" }
	constructor(private DataService: DataService, public HomeService: HomeService, private zone: NgZone) {
		this.getDrivers();
	}


	getDrivers(): void {
		this.DataService.getDrivers()
			.subscribe(drivers => {
				this.zone.run(() => { // <== added
					this.getData(drivers)

				})
			})

	}
	

	getData(drivers: any) {
		this.drivers = this.HomeService.editData(drivers);
		this.DataService.drivers = drivers;
	}

	getDeleteInfo(id1:any,id2:any) {
		this.DeleteInfo.id1 = id1;//database id	
		this.DeleteInfo.id2 = id2;//array drivers id
	}
	deleteDriver() {
			this.DataService.drivers.splice(this.DeleteInfo.id2, 1);
			this.DataService.deleteDriver(this.DeleteInfo.id1).subscribe(res =>
				console.log(res)
	    )
		}
	



}
