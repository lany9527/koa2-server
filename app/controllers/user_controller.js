exports.getUser = async (ctx, next) => {
  ctx.body = {
    username: '江户川柯南',
    age: 12
  }
}

exports.registerUser = async (ctx, next) => {
  console.log('用户注册：', ctx.registerUser.body);
}