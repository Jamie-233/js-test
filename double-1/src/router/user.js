const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const getCookieExpires = () => {
  const d = new Date()
  const t = d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.setTime', t);
  console.log('d.toGMTString', d.toGMTString());
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method;

  // 登录
  if(method === 'GET' && req.path === '/api/user/login') {

    const { username, password } = req.query
    // const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if(data.username) {
        req.session.username = data.username
        req.session.realname = data.realname

        console.log('req.session:', req.session);
        return new SuccessModel('登录成功')
      }
      else {
        return new ErrorModel('用户名或密码错误')
      }
    })
  }

  if(method === 'GET' && req.path === '/api/user/login-test') {
    if(req.session.username) {
      return Promise.resolve(new SuccessModel({
        session: req.session
      }, '登录成功'))
    }
    else {
      return Promise.resolve(new ErrorModel('尚未登录'))
    }
  }
}

module.exports = handleUserRouter;
