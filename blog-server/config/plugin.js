/*
 * @Author: xiangxiaojun
 * @Date: 2022-08-15 10:03:43
 * @Descripttion: 
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
