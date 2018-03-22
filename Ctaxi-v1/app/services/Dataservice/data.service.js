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
//import { Http } from '@angular/http';
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getDrivers = function () {
        return this.http.get('api/Drivers/').map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.getDriver = function (id) {
        return this.http.get('api/Drivers/' + id).map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.deleteDriver = function (id) {
        {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            return this.http.delete('api/Drivers/' + id, options).map(function (res) {
                return res.json();
            });
        }
    };
    DataService.prototype.addDriver = function (json) {
        json = JSON.stringify(json);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('api/Drivers/', json, options).map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.updateDriver = function (json, id) {
        json = JSON.stringify(json);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('api/Drivers/', json, options).map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.login = function (username, password) {
        var json = { username: username, password: password };
        var body = JSON.stringify(json);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('api/User/', body, options).map(function (res) {
            return res.json();
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map