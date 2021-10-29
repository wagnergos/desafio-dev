import CnabParser from '../services/CnabParser';
import SaveDataCnabToDatabase from '../services/SaveDataCnabToDatabase';

class CnabFileController {
  async store(req, res) {
    try {
      const cnab = req.file.buffer.toString('utf-8');

      const parsedCnab = CnabParser.run(cnab);

      for (const cnabTransaction of parsedCnab) {
        await SaveDataCnabToDatabase.run(cnabTransaction);
      }

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }
}

export default new CnabFileController();
