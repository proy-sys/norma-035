"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SugerenciasAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SugerenciasAddComponent = /** @class */ (function () {
    function SugerenciasAddComponent(infoSugerenciaQuejaService, ruta, fb, infoTrabajadorService) {
        this.infoSugerenciaQuejaService = infoSugerenciaQuejaService;
        this.ruta = ruta;
        this.fb = fb;
        this.infoTrabajadorService = infoTrabajadorService;
        this.listaTrabajadores = new Array();
        this.crearFormulario();
        this.listarTrabajadores();
    }
    SugerenciasAddComponent.prototype.ngOnInit = function () {
    };
    SugerenciasAddComponent.prototype.listarTrabajadores = function () {
        var _this = this;
        this.infoTrabajadorService.getListadotrabajadores().subscribe(function (data) {
            _this.listaTrabajadores = data;
        });
    };
    SugerenciasAddComponent.prototype.crearFormulario = function () {
        this.formAddQuejaSugerencia = this.fb.group({
            descripcion: ['', forms_1.Validators.required],
            status: ['false'],
            tipo: ['', forms_1.Validators.required],
            trabajador_id: ['', forms_1.Validators.required],
            estatus: [0]
        });
    };
    SugerenciasAddComponent.prototype.guardarAddSugerenciaQueja = function () {
        var _this = this;
        if (this.formAddQuejaSugerencia.invalid) {
            return Object.values(this.formAddQuejaSugerencia.controls).forEach(function (control) {
                control.markAsTouched();
            });
        }
        else {
            this.infoSugerenciaQuejaService.crearQuejaSugerencia(this.formAddQuejaSugerencia.value)
                .subscribe(function (data) {
                _this.ruta.navigate(['administrador/sugerencias']);
            }, function (error) {
                console.log('error al dar de alta la queja y/o sugerencia:' + error.message);
            });
        }
    };
    SugerenciasAddComponent.prototype.irListado = function () {
        this.ruta.navigate(['administrador/sugerencias']);
    };
    Object.defineProperty(SugerenciasAddComponent.prototype, "descripcionNoValido", {
        get: function () {
            return this.formAddQuejaSugerencia.get('descripcion').invalid && this.formAddQuejaSugerencia.get('descripcion').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SugerenciasAddComponent.prototype, "tipoNoValido", {
        get: function () {
            return this.formAddQuejaSugerencia.get('tipo').invalid && this.formAddQuejaSugerencia.get('tipo').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SugerenciasAddComponent.prototype, "trabajador_idNoValido", {
        get: function () {
            return this.formAddQuejaSugerencia.get('trabajador_id').invalid && this.formAddQuejaSugerencia.get('trabajador_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    SugerenciasAddComponent = __decorate([
        core_1.Component({
            selector: 'app-sugerencias-add',
            templateUrl: './sugerencias-add.component.html',
            styleUrls: ['./sugerencias-add.component.sass']
        })
    ], SugerenciasAddComponent);
    return SugerenciasAddComponent;
}());
exports.SugerenciasAddComponent = SugerenciasAddComponent;
