
const WebSocket = require('ws');
const query = require('./mysql');
const getCookie = require('./get-cookie');

(function(){
    let WebSocketServer = WebSocket.Server;
    let wss = new WebSocketServer({
        port: '8181',
    });
    let clients = [];
    let wsSend = (ws, source, message) => {
        for (let i = 0; i < clients.length; i++) {
            let clientSocket = clients[i].ws;
            if(ws !== clientSocket && clientSocket.readyState === WebSocket.OPEN){
                clientSocket.send(JSON.stringify({
                    source,
                    message
                }));
            }
        }
    }
    wss.on('connection', async (ws) => {
        let cookies = (ws.upgradeReq.headers.cookie);
        let sessionId = getCookie(cookies, 'SESSION_ID');
        let sql = 'select * from _mysql_session_store where id = ?';
        let data = await query(sql, [`SESSION_ID:${sessionId}`]);
        let userName;
        if(data.length > 0){
            userName = JSON.parse(data[0].data).username;
            //console.log(userName)
            let sql = 'select * from user_info where user_name = ?';
            let userInfo = await query(sql, [userName])
            //console.log(userInfo)
            source = userInfo[0].user_nick_name
            clients.push({
                ws,
                source,
            });
            let message = `${source}已连接`;
            //console.log(message)
            wsSend(ws, "system", message);
        }else{
            console.log('用户信息获取失败')
        }
       
        ws.on('message', function(data){
            console.log(data)
            let {source, type, message} = JSON.parse(data);
            if(type === 'system'){
                wsSend(ws, "system", message);
            }else{
                wsSend(ws, source, message);
            }
        });
        let closeSocket = (ws) => {
            for (let i = 0; i < clients.length; i++) {
                if (clients[i].ws !== ws) {
                    // clientSocket.send(JSON.stringify({
                    //     source,
                    //     '断开链接'
                    // }));
                    clients.splice(i, 1);
                }
            }
        };
        ws.on('close', (ws)=>{
            console.log(ws)
            closeSocket(ws)
        });
        process.on('SIGINT', function () {
            console.log("Closing things");
            closeSocket('Server has disconnected');
            process.exit();
        });
    });
})();

