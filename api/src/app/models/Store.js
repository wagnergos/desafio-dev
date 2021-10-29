import Sequelize, { Model } from 'sequelize';

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.INTEGER,
        owner_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Transaction, {
      as: 'transaction',
    });
  }
}

export default Store;
