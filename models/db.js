/**
 * 连接到mongo数据库
 */

const mongoose = require('mongoose');
const config = require('../config/common');

const dbConfig = config[process.env.NODE_ENV || 'development'];

mongoose.connect(dbConfig.mongo.uri);

// 成功连接
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to' + dbConfig.mongo.uri);
});

// 连接不成功
mongoose.connection.on('error', function (error) {
  console.log('Mongoose connection error:' + error);
});

// 连接断开
mongoose.connection.on('disconnected', function () { 
  console.log('Mongoose connection disconnected');
});
