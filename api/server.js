const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './' });

server.use(middlewares);
server.use(router);

module.exports = server;
