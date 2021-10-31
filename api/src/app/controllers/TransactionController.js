import Transaction from '../models/Transaction';
import TransactionCategory from '../models/TransactionCategory';

class TransactionController {
  async index(req, res) {
    const { storeId: store_id } = req.params;
    const { page = 1 } = req.query;

    const { count, rows } = await Transaction.findAndCountAll({
      where: { store_id },
      attributes: [
        'id',
        'value',
        'cpf',
        'card',
        'transaction_at',
        'transaction_category_id',
      ],
      order: [['transaction_at', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: TransactionCategory,
          as: 'category',
          attributes: ['name', 'type'],
        },
      ],
    });

    res.header({
      'Access-Control-Expose-Headers': 'X-Total-Count',
      'X-Total-Count': count,
    });

    return res.json(rows);
  }
}

export default new TransactionController();
