const { getList, getDetaile } = require('../controller/blog');

const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    // console.log(req.query);
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
    return {
      msg: '创建成功'
    }
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新成功'
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
