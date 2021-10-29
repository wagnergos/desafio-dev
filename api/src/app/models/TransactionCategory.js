import Sequelize, { Model } from 'sequelize';

class TransactionCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        type: Sequelize.ENUM('input', 'output'),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Transaction, {
      as: 'category',
    });
  }
}

export default TransactionCategory;
