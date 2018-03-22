import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Dataservice/data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../services/Homeservice/home.service';


@Component({
  selector: 'app-adddriver',
	templateUrl: './app/components/AddDriver/adddriver.component.html',
	styleUrls: ['./app/components/AddDriver/adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
	constructor(private DataService: DataService, private HomeService:HomeService, public Router: Router) {
	
	}
	addDriver(licenseNum:any, fullName:any, phoneNum:any, dateBegin:any, dateCheck:any) {
		let json = { licenseNum, fullName, phoneNum, dateBegin, dateCheck }
		if (this.HomeService.checkValidations(json)) {
			this.DataService.addDriver(json).subscribe(res =>
				this.Router.navigate(['/home'])
			)
		}
		else {
			document.getElementById("addDriverError").innerHTML = "Please Fill All  Fields";
		}
	}
	

	ngOnInit() {

  }

}
