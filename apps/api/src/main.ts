/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import GetProductController from './app/controller/GetProductController';

const app = express();

app.get('/api', (req, res) => {
  const result = new GetProductController().handle(req);
  res.send(result);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
