import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Dataservice/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/Homeservice/home.service';

@Component({
	selector: 'app-editdriver',
	templateUrl: './app/components/EditDriver/editdriver.component.html',
	styleUrls: ['./app/components/EditDriver/editdriver.component.css']
})
export class EditdriverComponent {

	id: string;
	driver: any[];
	editable: boolean;
	constructor(private DataService: DataService,
		public ActivatedRoute: ActivatedRoute,
		public HomeService: HomeService, public Router:Router
	) {

		this.driver = [];
		this.id = this.ActivatedRoute.snapshot.params['id'];
		this.DataService.getDriver(this.id).subscribe(res => {
			
			if (!res) {
				this.Router.navigate(['/home'])
			}
			this.driver = res

		})
	}


	updateDriver() {	

		if (this.HomeService.checkValidations(this.driver)) {
			this.DataService.updateDriver(this.driver, this.driver["Id"]).subscribe(res =>
				this.Router.navigate(['/home'])
			)
		}
		else {
			document.getElementById("editDriverError").innerHTML = "Please Fill All  Fields";
		}
	}

	deleteDriver() {
		this.DataService.deleteDriver(this.driver["Id"]).subscribe(res =>
			this.Router.navigate(['/home'])
		)
	}
	



		
}
