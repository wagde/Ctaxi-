"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./components/HomePage/homepage.component");
var adddriver_component_1 = require("./components/AddDriver/adddriver.component");
var login_component_1 = require("./components/Login/login.component");
var navbar_component_1 = require("./components/NavBar/navbar.component");
var editdriver_component_1 = require("./components/EditDriver/editdriver.component");
var data_service_1 = require("./services/Dataservice/data.service");
var home_service_1 = require("./services/Homeservice/home.service");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'adddriver', component: adddriver_component_1.AdddriverComponent },
    { path: 'editdriver/:id', component: editdriver_component_1.EditdriverComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                login_component_1.LoginComponent,
                adddriver_component_1.AdddriverComponent,
                navbar_component_1.NavbarComponent,
                editdriver_component_1.EditdriverComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [
                data_service_1.DataService, home_service_1.HomeService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map