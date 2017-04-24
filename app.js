const Koa = require('koa');
const app = new Koa;
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser')();

const router = require('./routes/routes')

app.use(routes())