/* global require, process */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults({
  static: 'build',
  noCors: true,
});
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
