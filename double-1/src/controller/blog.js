const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'Linux 设计与实现',
      content: '...',
      author: 'Jenkin',
      createTime: 12233344455
    },
    {
      id: 2,
      title: 'Node.js',
      content: 'Node.js',
      author: 'Jenkin',
      createTime: 12233344455
    }
  ]
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
  console.log('new blog data', blogData)
  return {
    id: 3
  }
}

const updateBlog = (id, blogData={}) => {
  console.log(id, blogData)
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
