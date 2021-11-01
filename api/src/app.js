import './bootstrap';

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

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
    this.server.use(express.json());
    this.exceptionHandler();
  }

  routes() {
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (error, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        return res.status(500).json({ error });
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
