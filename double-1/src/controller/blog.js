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
      id: 1,
      title: 'Linux设计与实现',
      content: '很难',
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

module.exports = {
  getList,
  getDetaile
}
