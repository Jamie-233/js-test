const mysql = require('mysql')

const con = mysql.createConnection({
  host: '192.168.64.2',
  user: 'root',
  password: '',
  port: '3306',
  database: 'myblog'
})

con.connect()

// const sql = 'select id, username from users;'
const sql = `INSERT INTO blogs (title, content, createtime, author) VALUES ('titleC', 'contentC', 1598773132828, 'zhangsan');`
con.query(sql, (err, result) => {
  if(err){
    console.log(err)
    return
  }
  console.log(result)
})

con.end()
