"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SugerenciasEditComponent = void 0;
var core_1 = require("@angular/core");
var SugerenciasEditComponent = /** @class */ (function () {
    function SugerenciasEditComponent(infoSugerenciaQuejaService, ruta, activatedRoute, fb) {
        this.infoSugerenciaQuejaService = infoSugerenciaQuejaService;
        this.ruta = ruta;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.sugerencia = {};
        this.crearFormulario();
        this.editarFormulario();
    }
    SugerenciasEditComponent.prototype.crearFormulario = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.infoSugerenciaQuejaService.getQueja_Sugerencia(params.id).subscribe(function (data) {
                _this.sugerencia = data;
                _this.sugerencia.estatus = _this.sugerencia.estatus + 1;
            }, function (err) {
                console.log('Error al cargar:' + err);
            });
        });
    };
    SugerenciasEditComponent.prototype.guardarEditSugerenciaQueja = function () {
        var _this = this;
        console.log(this.formEditQuejaSugerencia.value);
        if (this.formEditQuejaSugerencia.invalid) {
            return Object.values(this.formEditQuejaSugerencia.controls).forEach(function (control) {
                control.markAsTouched();
            });
        }
        else {
            this.infoSugerenciaQuejaService.actualizarSugerencia(this.sugerencia)
                .subscribe(function (data) {
                _this.ruta.navigate(['administrador/sugerencias']);
            }, function (error) {
                console.log('error al actualizar la sugerencia:' + error.message);
            });
        }
    };
    SugerenciasEditComponent.prototype.editarFormulario = function () {
        this.formEditQuejaSugerencia = this.fb.group({
            status: [''],
            en_proceso: [''],
            conclusion: [''],
            estatus: ['']
        });
    };
    Object.defineProperty(SugerenciasEditComponent.prototype, "en_procesoNoValido", {
        get: function () {
            return this.formEditQuejaSugerencia.get('en_proceso').invalid && this.formEditQuejaSugerencia.get('en_proceso').touched;
        },
        enumerable: false,
        configurable: true
    });
    SugerenciasEditComponent.prototype.irListado = function () {
        this.ruta.navigate(['administrador/sugerencias']);
    };
    SugerenciasEditComponent = __decorate([
        core_1.Component({
            selector: 'app-sugerencias-edit',
            templateUrl: './sugerencias-edit.component.html',
            styleUrls: ['./sugerencias-edit.component.sass']
        })
    ], SugerenciasEditComponent);
    return SugerenciasEditComponent;
}());
exports.SugerenciasEditComponent = SugerenciasEditComponent;
