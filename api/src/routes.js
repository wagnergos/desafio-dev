import { Router } from 'express';
import multer from 'multer';

import StoreController from './app/controllers/StoreController';
import CnabFileController from './app/controllers/CnabFileController';

import multerConfig from './config/multer';

const multerCnab = multer(multerConfig);

const routes = new Router();

routes.get('/stores', StoreController.index);

routes.post('/cnab', multerCnab.single('file'), CnabFileController.store);

export default routes;
