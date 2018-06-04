
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

    let changeOnLineNum = () => {
        for (let i = 0; i < clients.length; i++) {
            let clientSocket = clients[i].ws;
            if(clientSocket.readyState === WebSocket.OPEN){
                clientSocket.send(JSON.stringify({
                    callback: 'changeOnLineNumber',
                    params: clients.length,
                }));
            }
        }
    }


    wss.on('connection', async (ws) => {
        clients.push({
            ws,
        })
        //修改在线人数
        changeOnLineNum();
        ws.on('message', function(data){
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
            closeSocket(ws)
        });
        process.on('SIGINT', function () {
            console.log("Closing things");
            closeSocket('Server has disconnected');
            process.exit();
        });
    });
})();

