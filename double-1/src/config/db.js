const env = procress.env.NODE_ENV // 环境参数

let MYSQL_CONF

if(env === 'dev') {
  MYSQL_CONF = {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    port: '3306',
    database: 'myblog'
  }
}

if(env === 'production') {
  MYSQL_CONF = {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}
