"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeService = /** @class */ (function () {
    function HomeService() {
    }
    HomeService.prototype.editData = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var driver = data_1[_i];
            var monthes = this.getMonths(driver.dateCheck);
            driver.color = this.giveColor(monthes);
            driver.dateBegindays = this.getDays(driver.dateBegin);
        }
        return (data);
    };
    HomeService.prototype.getMonths = function (date1) {
        var dateNow = new Date(Date());
        var dateCheckSplit = date1.substring(0, 10).split("-").reverse();
        var dateBegin = new Date(dateCheckSplit[1] + "/" + dateCheckSplit[0] + "/" + dateCheckSplit[2]);
        return this.monthDiff(dateBegin);
    };
    HomeService.prototype.getDays = function (date1) {
        var dateNow = new Date(Date());
        var dateBeginSplit = date1.substring(0, 10).split("-").reverse();
        var dateBegin = new Date(dateBeginSplit[1] + "/" + dateBeginSplit[0] + "/" + dateBeginSplit[2]);
        return Math.ceil((Math.abs(dateNow.getTime() - dateBegin.getTime())) / (1000 * 60 * 60 * 24));
    };
    HomeService.prototype.giveColor = function (monthes) {
        if (monthes >= 5) {
            if (monthes >= 6) {
                return "red";
            }
            return "blue";
        }
        else {
            return "white";
        }
    };
    HomeService.prototype.monthDiff = function (d1) {
        var months;
        var months1;
        var dateNow = new Date(Date());
        months = (dateNow.getFullYear() - d1.getFullYear()) * 12;
        months1 = dateNow.getMonth() - d1.getMonth();
        months += months1;
        if (dateNow.getDate() < d1.getDate()) {
            months--;
        }
        return months;
    };
    HomeService.prototype.checkValidations = function (json) {
        for (var index in json) {
            if (!json[index] || !parseInt(json.licenseNum) || !parseInt(json.phoneNum)) {
                return false;
            }
        }
        return true;
    };
    HomeService = __decorate([
        core_1.Injectable()
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map