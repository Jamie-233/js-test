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
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || ''
    const detailList = getDetaile(id)
    return new SuccessModel(detailList)
  }

  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if(result) {
      return new SuccessModel('更新成功')
    }
    else {
      return new ErrorModel('更新失败')
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    if(result) {
      return new SuccessModel('删除成功')
    }
    else {
      return new ErrorModel('删除失败')
    }
  }
}

module.exports = handleBlogRouter
