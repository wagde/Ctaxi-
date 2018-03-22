"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../services/Dataservice/data.service");
var router_1 = require("@angular/router");
var home_service_1 = require("../../services/Homeservice/home.service");
var EditdriverComponent = /** @class */ (function () {
    function EditdriverComponent(DataService, ActivatedRoute, HomeService, Router) {
        var _this = this;
        this.DataService = DataService;
        this.ActivatedRoute = ActivatedRoute;
        this.HomeService = HomeService;
        this.Router = Router;
        this.driver = [];
        this.id = this.ActivatedRoute.snapshot.params['id'];
        this.DataService.getDriver(this.id).subscribe(function (res) {
            if (!res) {
                _this.Router.navigate(['/home']);
            }
            _this.driver = res;
        });
    }
    EditdriverComponent.prototype.updateDriver = function () {
        var _this = this;
        if (this.HomeService.checkValidations(this.driver)) {
            this.DataService.updateDriver(this.driver, this.driver["Id"]).subscribe(function (res) {
                return _this.Router.navigate(['/home']);
            });
        }
        else {
            document.getElementById("editDriverError").innerHTML = "Please Fill All  Fields";
        }
    };
    EditdriverComponent.prototype.deleteDriver = function () {
        var _this = this;
        this.DataService.deleteDriver(this.driver["Id"]).subscribe(function (res) {
            return _this.Router.navigate(['/home']);
        });
    };
    EditdriverComponent = __decorate([
        core_1.Component({
            selector: 'app-editdriver',
            templateUrl: './app/components/EditDriver/editdriver.component.html',
            styleUrls: ['./app/components/EditDriver/editdriver.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            home_service_1.HomeService, router_1.Router])
    ], EditdriverComponent);
    return EditdriverComponent;
}());
exports.EditdriverComponent = EditdriverComponent;
//# sourceMappingURL=editdriver.component.js.map