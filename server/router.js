
const router = require('koa-router')();
const controller = require('./controller/index') 
module.exports = (app) => {
    router.get('/session', controller.session);
    router.post('/login', controller.login);
    router.post('/register', controller.register);
    app.use(router.routes());
}