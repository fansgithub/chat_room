const query = require('../mysql.js');
const getCookie = require('../get-cookie.js');
const moment = require('moment');
const _ = require('lodash');
module.exports = {
    session: async (ctx, next)=>{
        let username = _.get(ctx.session, 'username');
        if(username){
            let sql = 'select * from user_info where user_name = ?';
            let userInfo = await query(sql, [username]);
            let data = userInfo[0];
            ctx.body = 'var InitData =' + JSON.stringify(data);
        }else{
            ctx.body = {};
        }
    },
    login: async (ctx, next)=>{
        let {loginName, password} = ctx.request.body;
        let queryResult = await query(`select * from user_info where user_name='${loginName}' and user_password='${password}'`)
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
            ctx.body = {
                result: false,
                errorMsg: '用户名已存在'
            }
        }else{
            let post = {
                user_name: username,
                user_gender: gender,
                user_nick_name: nickName,
                user_password: password,
                submission_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            }
            await query('INSERT INTO user_info SET ?', post);
            ctx.body = {
                result: true
            }
        }
    },
}