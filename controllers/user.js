/**
 * Created by littlestone on 17-4-24.
 */

import mongoose from 'mongoose';
import md5 from 'md5';

const UserModel = mongoose.model('User');

class UserController { 
  //用户注册
  static async register(ctx) { 

  }
  //用户登录
  static async login(ctx) {

  }
  //用户登出
  static async logout(ctx) { 
    
  }
}

export default UserController;
