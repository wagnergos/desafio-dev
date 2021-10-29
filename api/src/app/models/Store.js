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
}

export default Store;
