/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import AddDescriptionController from './app/controller/AddDescriptionController';

const app = express();

app.get('/api', async (req, res) => {
  const result = await new AddDescriptionController().handle(req);
  res.send(result);
});

const port = process.env.port || 4445;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
