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
exports.__esModule = true;
exports.User = void 0;
var common_1 = require("@typedorm/common");
var common_2 = require("@typedorm/common");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, common_1.AutoGenerateAttribute)({
            strategy: common_2.AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4
        }),
        __metadata("design:type", String)
    ], User.prototype, "id");
    __decorate([
        (0, common_1.Attribute)(),
        __metadata("design:type", String)
    ], User.prototype, "name");
    __decorate([
        (0, common_1.Attribute)({
            unique: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "email");
    __decorate([
        (0, common_1.Attribute)(),
        __metadata("design:type", String)
    ], User.prototype, "status");
    User = __decorate([
        (0, common_1.Entity)({
            name: "user",
            primaryKey: {
                partitionKey: 'USER.ID#{{id}}',
                sortKey: 'USER.ID#{{id}}'
            },
            indexes: {
                GSI1: {
                    partitionKey: 'USER#{{id}}',
                    sortKey: 'USER#{{id}}#STATUS#{{status}}',
                    type: common_1.INDEX_TYPE.GSI
                }
            }
        }),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
