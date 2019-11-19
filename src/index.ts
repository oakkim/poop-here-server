import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { RestRoom } from './models/restRoom';

createConnection({
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
}).then(async con => {
  const app = new Koa();
  const router = new Router();

  router.get('/', async (ctx, next) => {
    ctx.body = { msg: 'Hello, world' };
  
    await next();
  });
  
  app.use(json());
  app.use(logger());
  
  app.use(router.routes()).use(router.allowedMethods());
  
  app.listen(3000, () => {
    console.log('Koa started');
  });

  const restRoom = new RestRoom();

  restRoom.name = "대구소프트웨어고등학교 본관 1층";
  restRoom.address = "대구소프트웨어고등학교";
  restRoom.stars = 3.3;

  await restRoom.save();
  
}).catch(err => console.log(err))
