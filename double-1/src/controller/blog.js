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

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}';`
  return exec(sql).then(row => {
    return row[0]
  })
}

const newBlog = (blogData={}) => {
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author)
    values('${title}', '${content}', ${createtime}, '${author}');
  `
  return exec(sql).then(result => {
    console.log(result)
    return {
      id: result.insertId
    }
  })
}

const updateBlog = (id, blogData={}) => {
  const title = blogData.title
  const content = blogData.content

  const sql = `update blogs set title='${title}', content='${title}' where id=${id}`
  return exec(sql).then(updateData => {
    console.log('updateData', updateData)
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}';`
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
