
const router = require('koa-router')({
    prefix: '/api'
});
const controller = require('./controller/index') 
module.exports = (app) => {
    router.get('/session', controller.session);
    router.post('/login', controller.login);
    router.post('/register', controller.register);
    router.get('/layout', controller.layout)
    app.use(router.routes());
}