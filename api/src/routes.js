import { Router } from 'express';
import multer from 'multer';

import CnabFileController from './app/controllers/CnabFileController';

import multerConfig from './config/multer';

const multerCnab = multer(multerConfig);

const routes = new Router();

routes.post('/cnab', multerCnab.single('file'), CnabFileController.store);

export default routes;
