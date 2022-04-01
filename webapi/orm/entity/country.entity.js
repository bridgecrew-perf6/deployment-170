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
exports.Country = void 0;
const typeorm_1 = require("typeorm");
let Country = class Country extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Country.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 10,
        nullable: true
    }),
    __metadata("design:type", String)
], Country.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 15,
        nullable: true
    }),
    __metadata("design:type", Object)
], Country.prototype, "isoCode2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 15,
        nullable: true
    }),
    __metadata("design:type", Object)
], Country.prototype, "isoCode3", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Country.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Country.prototype, "capital", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Country.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Country.prototype, "created", void 0);
Country = __decorate([
    (0, typeorm_1.Entity)("tblCountry")
], Country);
exports.Country = Country;
//# sourceMappingURL=country.entity.js.map