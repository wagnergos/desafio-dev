import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
        card: Sequelize.STRING,
        transaction_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Store, { foreignKey: 'store_id', as: 'transaction' });
    this.belongsTo(models.TransactionCategory, {
      foreignKey: 'transaction_category_id',
      as: 'transaction_category',
    });
  }
}

export default Transaction;
