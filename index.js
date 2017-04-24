const Koa = require('koa');
const app = new Koa;

// app.use(async (ctx) => {
//   ctx.body = 'hello koa2'
// });

app.use(async (ctx) => {
  let url = ctx.request.url;
  ctx.body = url;
});

app.listen(8000);
console.log(
  "   ====================="+ '\n'+
  "   server start at 8000"+ '\n'+
  "   ====================="
  );