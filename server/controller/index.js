const query = require('../mysql.js');
const getCookie = require('../get-cookie.js');
const moment = require('moment');
module.exports = {
    index: async (ctx, next)=>{
        console.log(ctx.session)
        if(ctx.session){
            ctx.redirect('/index.html');
        }else{
            ctx.redirect('/login.html');
        }
    },
    login: async (ctx, next)=>{
        let {loginName, password} = ctx.request.body;
        let queryResult = await query(`select * from user_info where user_name='${loginName}' and user_password='${password}'`)
        console.log(loginName, password)
        if(queryResult.length === 1){
            ctx.session = {
                username: loginName,
            };
            ctx.body = {
                result: true,
            }
        }else{
            ctx.body = {
                result: false,
                errorMsg: '用户名或密码错误'
            }
        }
    },
    register: async (ctx, next)=>{
        let {username, password,  nickName, gender} = ctx.request.body;
        //判断用户名是否重复
        let result = await query(`select * from user_info where user_name = '${username}'`);
        if(result.length > 0){
            console.log(result.length)
            ctx.body = {
                result: false,
                errorMessage: '用户名已存在'
            }
        }else{
            let post = {
                user_name: username,
                user_gender: gender,
                user_nick_name: nickName,
                user_password: password,
                submission_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            }
            query('INSERT INTO user_info SET ?', post).then((data)=>{
                console.log()
                //ctx.redirect('/login.html');
            }, )
        }
    },

    userInfo: async (ctx, next) => {
        let cookies = (ctx.request.header.cookie);
        let sessionId = getCookie(cookies, 'SESSION_ID');
        let sql = 'select * from _mysql_session_store where id = ?';
        let data = await query(sql, [`SESSION_ID:${sessionId}`]);
        let userName;
        if(data.length > 0){
            userName = JSON.parse(data[0].data).username;
            let sql = 'select * from user_info where user_name = ?';
            let userInfo = await query(sql, [userName])
            ctx.body = userInfo[0];
        }else{
            ctx.body = 'session expried'
        }
    }
}