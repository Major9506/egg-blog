/*
 * @Author: xiangxiaojun
 * @Date: 2022-09-06 16:25:52
 * @Descripttion: 
 */
module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
}