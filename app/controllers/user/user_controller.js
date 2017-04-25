const mongoose = require('mongoose');
const md5 = require('md5');
const User = require('../../models/user/user.model');
const UserModel = mongoose.model('User')

class UserController {

  // 用户注册
  static async register(ctx) {
    const { name, nickname, password, apassword, profile } = ctx.request.body;
    if (!name || !password) {
      return ctx.error({ msg: '用户名或密码不能为空!' });
    }
    if (password != apassword) {
      return ctx.error({ msg: '两次输入的密码不一致!' });
    }
    const ishas = await UserModel.findOne({ name });
    if (ishas) {
      return ctx.error({ msg: '该用户已存在!' });
    }
    const result = await UserModel.create({ name, nickname, password: md5(password), profile });
    if (!result) {
      return ctx.error({ msg: '注册失败!' });
    }
    return ctx.success({ msg: '注册成功' });
  }

  // 用户登录
  static async login(ctx) {
    const { name, password } = ctx.request.body;
    if (!name || !password) {
      return ctx.error({ msg: '获取用户失败!' });
    }

    const data = await UserModel.findOne({ name, password: md5(password) }, { password: 0 });
    if (!data) return ctx.error({ msg: '用户名或密码错误!' });

    ctx.session.user = data;
    const id = data._id;
    const avatar = data.avatar;
    const keep_user = 604800000; // 7天

    ctx.cookies.set('userid', id, { maxAge: keep_user, httpOnly: false });
    ctx.cookies.set('username', name, { maxAge: keep_user, httpOnly: false });
    ctx.cookies.set('avatar', avatar, { maxAge: keep_user, httpOnly: false });
    ctx.success({ msg: '登录成功', data });
  }

  // 用户退出
  static async logout(ctx) {
    // const { userid } = ctx.query;
    // const cookie_userid = ctx.cookies.get('userid');
    // if(!userid) return ctx.error({ msg:'用户id不存在!' });

    // const user = ctx.session.user;
    // if(!user&&!cookie_userid) return ctx.error({ msg:'该用户已退出!' });

    // ctx.session.user = null;
    // ctx.cookies.set('userid',null);
    // ctx.cookies.set('username',null);
    // ctx.cookies.set('avatar',null);

    // return ctx.success({ msg:'退出成功!' });
    ctx.body = {
      username: '退出成功',
      success: true
    }
  }

}
module.exports = UserController;