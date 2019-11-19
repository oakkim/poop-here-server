"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const restRoom_1 = require("./models/restRoom");
typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "poop_here",
    entities: [
        __dirname + "/models/*.js"
    ],
    synchronize: true,
}).then((con) => __awaiter(void 0, void 0, void 0, function* () {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
        ctx.body = { msg: 'Hello, world' };
        yield next();
    }));
    app.use(koa_json_1.default());
    app.use(koa_logger_1.default());
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000, () => {
        console.log('Koa started');
    });
    const restRoom = new restRoom_1.RestRoom();
    restRoom.name = "대구소프트웨어고등학교 본관 1층";
    restRoom.address = "대구소프트웨어고등학교";
    restRoom.stars = 3.3;
    yield restRoom.save();
})).catch(err => console.log(err));
//# sourceMappingURL=index.js.map