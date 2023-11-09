"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var button_1 = require("primeng/button");
var inputtext_1 = require("primeng/inputtext");
var table_1 = require("primeng/table");
var XLSX = require("xlsx");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.products = [
            { code: '397', name: '199', category: '213', quantity: 216 },
            { code: '682', name: '736', category: '258', quantity: 796 },
            { code: '866', name: '432', category: '995', quantity: 19 },
            { code: '761', name: '633', category: '675', quantity: 842 },
            { code: '579', name: '175', category: '453', quantity: 165 },
            { code: '375', name: '785', category: '476', quantity: 443 },
            { code: '846', name: '830', category: '268', quantity: 391 },
            { code: '31', name: '146', category: '830', quantity: 148 },
            { code: '668', name: '782', category: '697', quantity: 532 },
            { code: '986', name: '332', category: '476', quantity: 267 },
            { code: '137', name: '111', category: '557', quantity: 272 },
            { code: '500', name: '338', category: '947', quantity: 734 },
            { code: '338', name: '273', category: '594', quantity: 44 },
            { code: '545', name: '756', category: '436', quantity: 254 },
            { code: '79', name: '907', category: '930', quantity: 653 },
            { code: '270', name: '950', category: '312', quantity: 85 },
            { code: '961', name: '604', category: '670', quantity: 791 },
            { code: '449', name: '839', category: '804', quantity: 934 },
            { code: '642', name: '474', category: '808', quantity: 73 },
            { code: '658', name: '750', category: '250', quantity: 813 },
        ];
        this.filename = "products.xlsx";
        this.searchValue = '';
        this.title = 'lesson01';
        this.isServerRunning = true;
    }
    AppComponent.prototype.exportExcel = function () {
        var data = document.getElementById("table-data");
        var ws = XLSX.utils.table_to_sheet(data);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, this.filename);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [
                table_1.TableModule,
                common_1.CommonModule,
                router_1.RouterOutlet,
                forms_1.FormsModule,
                button_1.ButtonModule,
                inputtext_1.InputTextModule,
            ],
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
