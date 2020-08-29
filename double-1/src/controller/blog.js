const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'Linux设计与实现',
      content: '很难',
      author: 'Jenkin',
      createTime: 12233344455
    },
    {
      id: 2,
      title: 'Node.js',
      content: '很难...',
      author: 'Jenkin',
      createTime: 12233344455
    }
  ]
}

const getDetaile = (id) => {
  return [
    {
      id: 1,
      title: 'Linux设计与实现',
      content: '很难',
      author: 'Jenkin',
      createTime: 12233344455
    }
  ]
}

const newBlog = (blogData={}) => {
  console.log('new blog data', blogData);
  return {
    id: 3
  }
}

const updateBlog = (id, blogData={}) => {
  console.log(id, blogData);
  return true
}

module.exports = {
  getList,
  getDetaile,
  newBlog,
  updateBlog
}
