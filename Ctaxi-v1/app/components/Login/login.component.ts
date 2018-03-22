import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Dataservice/data.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operator/timeout';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-login',
	templateUrl: './app/components/Login/login.component.html',
	styleUrls: ['./app/components/Login/login.component.css']
})
export class LoginComponent implements OnInit {
	
	constructor(private DataService: DataService, private router: Router

	
	) {
		
	}

	

  ngOnInit() {
  }

	login(username: string, password: string) {
		this.DataService.login(username, password).subscribe(res =>
			this.routeTo(res))}

	routeTo(res: boolean) {
		if (res) {
			this.router.navigate(['/home']);
		}
		else {

			document.getElementById("massge").innerHTML = "invalid username or password";
		}
	}

}
