const jsonServer = require('json-server');

// Tạo dữ liệu mẫu trong RAM
const defaultData = {
  proxyOrders: [],
  proxyInventory: []
};

// Tạo server với dữ liệu trong RAM
const server = jsonServer.create();
const router = jsonServer.router(defaultData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export server cho Vercel
module.exports = server;
