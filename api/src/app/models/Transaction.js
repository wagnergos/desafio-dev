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
}

export default Transaction;
