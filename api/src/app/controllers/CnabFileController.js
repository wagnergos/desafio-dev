import { request } from 'express';
import CnabParser from '../services/CnabParser';
import SaveDataCnabToDatabase from '../services/SaveDataCnabToDatabase';

class CnabFileController {
  async store(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'CNAB file is required' });
    }

    const cnab = req.file.buffer.toString('utf-8');

    const parsedCnab = CnabParser.run(cnab);

    for (const cnabTransaction of parsedCnab) {
      await SaveDataCnabToDatabase.run(cnabTransaction);
    }

    return res.status(201).send();
  }
}

export default new CnabFileController();
