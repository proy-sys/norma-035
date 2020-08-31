"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SugerenciasComponent = void 0;
var core_1 = require("@angular/core");
var SugerenciasComponent = /** @class */ (function () {
    function SugerenciasComponent(infoSugerenciaQuejaService, ruta) {
        this.infoSugerenciaQuejaService = infoSugerenciaQuejaService;
        this.ruta = ruta;
        this.listaSugerencias = new Array();
    }
    SugerenciasComponent.prototype.ngOnInit = function () {
        this.listarSugerencias();
    };
    SugerenciasComponent.prototype.listarSugerencias = function () {
        var _this = this;
        this.infoSugerenciaQuejaService.getListadoQueja_Sugerencia().subscribe(function (data) {
            _this.listaSugerencias = data;
        });
    };
    //  cambiarStatus(id, status){
    //    this.infoSugerenciaQuejaService.setStatus(id , status).subscribe(
    //     data => {
    //       console.log(data);
    //       this.ngOnInit();
    //     }
    //   );
    //  }
    SugerenciasComponent.prototype.irSugerenciaadd = function () {
        this.ruta.navigate(['administrador/sugerenciasadd']);
    };
    SugerenciasComponent.prototype.irSugerenciaEdit = function (id) {
        this.ruta.navigate(['administrador/sugerenciasedit', id]);
    };
    SugerenciasComponent = __decorate([
        core_1.Component({
            selector: 'app-sugerencias',
            templateUrl: './sugerencias.component.html',
            styleUrls: ['./sugerencias.component.sass']
        })
    ], SugerenciasComponent);
    return SugerenciasComponent;
}());
exports.SugerenciasComponent = SugerenciasComponent;
