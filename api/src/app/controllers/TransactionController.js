import Transaction from '../models/Transaction';
import TransactionCategory from '../models/TransactionCategory';

class TransactionController {
  async index(req, res) {
    const { storeId: store_id } = req.params;
    const { page = 1 } = req.query;

    const transactions = await Transaction.findAll({
      where: { store_id },
      attributes: [
        'value',
        'cpf',
        'card',
        'transaction_at',
        'transaction_category_id',
      ],
      order: [['transaction_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: TransactionCategory,
          as: 'category',
          attributes: ['name', 'type'],
        },
      ],
    });

    return res.json(transactions);
  }
}

export default new TransactionController();
