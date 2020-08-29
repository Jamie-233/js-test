const {
  getList,
  getDetail,
  newBlog,
  updateBlog
} = require('../controller/blog');

const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const { author='', keyword='' } = req.query;
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || '';
    const detailList = getDetaile(id);
    return new SuccessModel(detailList);
  }

  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body;
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if(result) {
      return new SuccessModel('更新成功');
    }
    else {
      return new ErrorModel('更新失败');
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '删除成功'
    }
  }
}

module.exports = handleBlogRouter;
