import Sequelize from 'sequelize';
import Store from '../models/Store';
import Transaction from '../models/Transaction';
import TransactionCategory from '../models/TransactionCategory';

class GetStores {
  async run() {
    const input = await Store.findAll({
      attributes: [
        'id',
        'owner_name',
        'name',
        [
          Sequelize.fn('SUM', Sequelize.col('transaction.value')),
          'total_value',
        ],
      ],
      include: [
        {
          model: Transaction,
          as: 'transaction',
          attributes: [],
          include: [
            {
              model: TransactionCategory,
              as: 'category',
              attributes: [],
              where: {
                type: 'input',
              },
            },
          ],
        },
      ],
      group: ['Store.id'],
      raw: true,
    });

    const output = await Store.findAll({
      attributes: [
        'id',
        'owner_name',
        'name',
        [
          Sequelize.fn('SUM', Sequelize.col('transaction.value')),
          'total_value',
        ],
      ],
      include: [
        {
          model: Transaction,
          as: 'transaction',
          attributes: [],
          include: [
            {
              model: TransactionCategory,
              as: 'category',
              attributes: [],
              where: {
                type: 'output',
              },
            },
          ],
        },
      ],
      group: ['Store.id'],
      raw: true,
    });

    return input.map((store, index) => {
      const totalValue = store.total_value - output[index].total_value;

      return {
        id: store.id,
        owner_name: store.owner_name,
        name: store.name,
        total_value: totalValue,
      };
    });
  }
}

export default new GetStores();
