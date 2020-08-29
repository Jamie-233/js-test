const http = require('http');

const port = 3000;
const serverHandle = require('../app');

const server = http.createServer(serverHandle)
server.listen(port);
console.log(`Your application is running here: http://localhost:${port}`);
