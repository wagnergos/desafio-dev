import {
  normalizeCnabDate,
  normalizeCnabTime,
} from '../helper/normalizeCnabDate';

class CnabParser {
  run(cnabText) {
    const transactions = cnabText
      .split(/\r?\n|\r/)
      .map(transaction => transaction.trim());

    return transactions.map(transaction => ({
      type: Number(this.cropTransactionFields(transaction, 0, 1)),
      date: normalizeCnabDate(this.cropTransactionFields(transaction, 1, 8)),
      value: parseInt(this.cropTransactionFields(transaction, 9, 10), 10),
      cpf: this.cropTransactionFields(transaction, 19, 11),
      card: this.cropTransactionFields(transaction, 30, 12),
      time: normalizeCnabTime(this.cropTransactionFields(transaction, 42, 6)),
      name: this.cropTransactionFields(transaction, 48, 14).trim(),
      store: this.cropTransactionFields(transaction, 62, 19).trim(),
    }));
  }

  cropTransactionFields(transaction, start, offset) {
    return transaction.substr(start, offset);
  }
}

export default new CnabParser();
