const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

// const {userRouter} = require('./routes/router.export');
const userRouter = require('./routes/api/user_router');
// const index = require('./routes/index');
// const users = require('./routes/users');

//log工具
const logUtil = require('./utils/log_util');

//格式化输出
const response_formatter = require('./middlewares/response_formatter');

// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();

    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);

  } catch (error) {

    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});


// routes
// app.use(index.routes(), index.allowedMethods());
// app.use(users.routes(), users.allowedMethods());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
// console.log("userRouter----->",userRouter);
module.exports = app;
