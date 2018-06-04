const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const router = require('./router.js');
const session = require('./session.js');

session(app);
app.use(bodyParser());

router(app);

//const staticPath = './static';
const staticPath = '../public/dest'
app.use(koaStatic(
    path.resolve(__dirname, staticPath)
));
app.listen(5000, ()=>{
    console.log('server is running at http://localhost:5000')
})

require('./websock.js');
