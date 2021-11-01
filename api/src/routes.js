import { Router } from 'express';
import multer from 'multer';

import SessionControler from './app/controllers/SessionControler';
import StoreController from './app/controllers/StoreController';
import TransactionController from './app/controllers/TransactionController';
import CnabFileController from './app/controllers/CnabFileController';

import authMiddleware from './app/middlewares/auth';

import multerConfig from './config/multer';

const multerCnab = multer(multerConfig);

const routes = new Router();

routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.get('/stores', StoreController.index);

routes.get('/transactions/:storeId', TransactionController.index);

routes.post('/cnab', multerCnab.single('file'), CnabFileController.store);

export default routes;
