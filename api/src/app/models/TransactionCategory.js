import Sequelize, { Model } from 'sequelize';

class TransactionCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        card: Sequelize.ENUM('input', 'output'),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default TransactionCategory;
