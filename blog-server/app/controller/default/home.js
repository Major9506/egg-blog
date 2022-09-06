/*
 * @Author: xiangxiaojun
 * @Date: 2022-08-15 10:03:43
 * @Descripttion: 
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    const {ctx} = this;
    ctx.body = 'hello, major_';
  }
}

module.exports = HomeController;
