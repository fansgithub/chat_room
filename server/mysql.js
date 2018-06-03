const mysql = require('mysql');
const config = require('./mysql-config');

let pool = mysql.createPool(config);

let query = (sql, values) => {
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err, connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql, values, (err, rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(JSON.parse(JSON.stringify(rows)));
                    }
                    connection.release();
                })
            }
        })
    })
}
module.exports = query;