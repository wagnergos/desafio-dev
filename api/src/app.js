import './bootstrap';

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../swagger.json';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
  }

  routes() {
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.server.use(routes);
  }
}

export default new App().server;
