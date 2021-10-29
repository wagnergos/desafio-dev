import Sequelize from 'sequelize';

import Store from '../app/models/Store';
import Transaction from '../app/models/Transaction';
import TransactionCategory from '../app/models/TransactionCategory';

import databaseConfig from '../config/database';

const models = [Store, Transaction, TransactionCategory];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
