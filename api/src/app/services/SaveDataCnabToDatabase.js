import Store from '../models/Store';
import Transaction from '../models/Transaction';

class SaveDataCnabToDatabase {
  async run(cnabTransaction) {
    const {
      type: transaction_category_id,
      date,
      value,
      cpf,
      card,
      time,
      name: owner_name,
      store: name,
    } = cnabTransaction;

    const [store] = await Store.findOrCreate({
      where: {
        owner_name,
        name,
      },
    });

    const transaction = await Transaction.create({
      value,
      cpf,
      card,
      store_id: store.id,
      transaction_category_id,
      transaction_at: new Date(
        Date.UTC(
          date.year,
          date.month,
          date.day,
          time.hour,
          time.minutes,
          time.seconds
        )
      ),
    });

    return transaction;
  }
}

export default new SaveDataCnabToDatabase();
