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
const typeorm_1 = require("typeorm");
const restRoomType_1 = require("./restRoomType");
const toilet_1 = require("./toilet");
const fee_1 = require("./fee");
const restRoom_1 = require("./restRoom");
let RestRoomInfo = class RestRoomInfo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RestRoomInfo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('enum', { enum: restRoomType_1.RestRoomType }),
    __metadata("design:type", Number)
], RestRoomInfo.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToMany((type) => toilet_1.Toilet, (toilet) => toilet.restRoomInfo),
    __metadata("design:type", Array)
], RestRoomInfo.prototype, "toilets", void 0);
__decorate([
    typeorm_1.OneToMany((type) => fee_1.Fee, (fee) => fee.restRoomInfo),
    __metadata("design:type", Array)
], RestRoomInfo.prototype, "fees", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => restRoom_1.RestRoom, (restRoom) => restRoom.infos),
    __metadata("design:type", restRoom_1.RestRoom)
], RestRoomInfo.prototype, "restRoom", void 0);
RestRoomInfo = __decorate([
    typeorm_1.Entity()
], RestRoomInfo);
exports.RestRoomInfo = RestRoomInfo;
//# sourceMappingURL=restRoomInfo.js.map