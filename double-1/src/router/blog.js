const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 登录验证
// const loginCheck = (req) => {
//   if(!req.session.username) {
//     return Promise.resolve(
//       new ErrorModel('尚未登录')
//     )
//   }
// }

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const { author='', keyword='' } = req.query
    const result = getList(author, keyword)
    return result.then(response => {
      return new SuccessModel(response)
    })
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || ''
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    req.body.author = 'Jenkin'
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(value => {
      if(value) {
        return new SuccessModel('更新成功')
      }
      else {
        return new ErrorModel('更新失败')
      }
    })
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan'
    return delBlog(id, author).then(result => {
      if(result) {
        return new SuccessModel('删除成功')
      }
      else {
        return new ErrorModel('删除失败')
      }
    })
  }
}

module.exports = handleBlogRouter
