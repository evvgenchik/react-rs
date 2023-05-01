import jsonServer from 'json-server';
import booksJson from './data/booksDB.json' assert { type: 'json' };

const server = jsonServer.create();
const router = jsonServer.router(booksJson);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);

server.listen(port);
