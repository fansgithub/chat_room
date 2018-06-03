
const router = require('koa-router')();
const controller = require('./controller/index') 
module.exports = (app) => {
    router.get('/', controller.index);
    router.post('/login', controller.login);
    router.post('/register', controller.register);
    router.get('/user-info', controller.userInfo);
    app.use(router.routes());
}