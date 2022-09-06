/*
 * @Author: xiangxiaojun
 * @Date: 2022-08-15 10:03:43
 * @Descripttion: 
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app);
};
