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


// Thêm vào sau const middlewares = jsonServer.defaults();
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Xử lý preflight requests
server.options('*', (req, res) => {
  res.sendStatus(200);
});
