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
var home_service_1 = require("../../services/Homeservice/home.service");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(DataService, HomeService, zone) {
        this.DataService = DataService;
        this.HomeService = HomeService;
        this.zone = zone;
        this.DeleteInfo = { id1: "", id2: "" };
        this.getDrivers();
    }
    HomepageComponent.prototype.getDrivers = function () {
        var _this = this;
        this.DataService.getDrivers()
            .subscribe(function (drivers) {
            _this.zone.run(function () {
                _this.getData(drivers);
            });
        });
    };
    HomepageComponent.prototype.getData = function (drivers) {
        this.drivers = this.HomeService.editData(drivers);
        this.DataService.drivers = drivers;
    };
    HomepageComponent.prototype.getDeleteInfo = function (id1, id2) {
        this.DeleteInfo.id1 = id1; //database id	
        this.DeleteInfo.id2 = id2; //array drivers id
    };
    HomepageComponent.prototype.deleteDriver = function () {
        this.DataService.drivers.splice(this.DeleteInfo.id2, 1);
        this.DataService.deleteDriver(this.DeleteInfo.id1).subscribe(function (res) {
            return console.log(res);
        });
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            templateUrl: './app/components/HomePage/homepage.component.html',
            styleUrls: ['./app/components/HomePage/homepage.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, home_service_1.HomeService, core_1.NgZone])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map