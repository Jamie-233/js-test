const loginCheck = (username, password) => {
  if(username === 'Jenkin' && password === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck
}
