import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/HomePage/homepage.component';
import { AdddriverComponent } from './components/AddDriver/adddriver.component';
import { LoginComponent } from './components/Login/login.component';
import { NavbarComponent } from './components/NavBar/navbar.component';
import { EditdriverComponent } from './components/EditDriver/editdriver.component';
import { DataService } from './services/Dataservice/data.service';
import { HomeService } from './services/Homeservice/home.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'home', component: HomepageComponent },
	{ path: 'adddriver', component: AdddriverComponent },
	{ path: 'editdriver/:id', component: EditdriverComponent }]

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		LoginComponent,
		AdddriverComponent,
		NavbarComponent,
		EditdriverComponent
		
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		DataService, HomeService],
	bootstrap: [AppComponent]
})
export class AppModule { }