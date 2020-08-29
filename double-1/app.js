const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');


const querystring = require('querystring');

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json');

  // 解析 path
  const url = req.url;
  req.path = url.split('?')[0];
  // console.log(querystring.parse(url.split('?')[1]));
  
  // 解析 query
  req.query = querystring.parse(url.split('?')[1]);

  // 处理blog路由
  const blogData = handleBlogRouter(req, res);
  if(blogData) {
    res.end(

      // getBlogList()
      JSON.stringify(blogData)
    )
    return
  }

  const userData = handleUserRouter(req, res);
  if(userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 Not Found\n");
  res.end();
}

module.exports = serverHandle;

// procress.env.NODE_ENV
