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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendacionIA = void 0;
// src/entities/RecomendacionIA.ts
const typeorm_1 = require("typeorm");
const Alerta_1 = require("./Alerta");
let RecomendacionIA = class RecomendacionIA {
};
exports.RecomendacionIA = RecomendacionIA;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecomendacionIA.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Alerta_1.Alerta, (alerta) => alerta.recomendaciones),
    __metadata("design:type", typeof (_a = typeof Alerta_1.Alerta !== "undefined" && Alerta_1.Alerta) === "function" ? _a : Object)
], RecomendacionIA.prototype, "alerta", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], RecomendacionIA.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], RecomendacionIA.prototype, "fecha", void 0);
exports.RecomendacionIA = RecomendacionIA = __decorate([
    (0, typeorm_1.Entity)()
], RecomendacionIA);
