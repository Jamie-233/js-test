const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/db')


// 创建连接对象

const con = mysql.createConnection(MYSQL_CONF)

// 连接
con.connect()

// 单例模式 exec 用的是一个 connect连接 不需要断开连接
// 统一执行 sql 的函数;
function exec(sql) {
  // 需要一个 callback 返回 result
  // 可以封装成一个 promise
  const promise = new Promise((resolve, reject) => {
    // con.query 是一个异步的查询
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}
