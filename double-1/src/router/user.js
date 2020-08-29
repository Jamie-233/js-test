const handleUserRouter = (req, res) => {
  const method = req.method;

  // 登录
  if(method === 'GET' && req.path === '/api/user/login') {
    return {
      msg: '登录成功'
    }
  }
}

module.exports = handleUserRouter;
