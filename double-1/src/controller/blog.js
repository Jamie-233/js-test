const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  // 因为 author keyword值不确定是否存在 要有 1=1 为了查询语法不出错误用于占位
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回 promise
  return exec(sql)
}

const getDetaile = (id) => {
  return [
    {
      id: 1,
      title: 'Linux 设计与实现',
      content: '...',
      author: 'Jenkin',
      createTime: 12233344455
    }
  ]
}

const newBlog = (blogData={}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData={}) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetaile,
  newBlog,
  updateBlog,
  delBlog
}
