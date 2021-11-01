import request from 'supertest';

import app from '../../src/app';
import Store from '../../src/app/models/Store';
import Transaction from '../../src/app/models/Transaction';

describe('User', () => {
  it('should be able to list all transactions', async () => {
    const store = await Store.create({
      name: 'Test sample name',
      owner_name: 'Test sample name',
    });

    const transaction = {
      cpf: '00000000000',
      card: '0000****0000',
      value: 1000,
      store_id: store.id,
      transaction_category_id: 1,
      transaction_at: new Date(),
    };

    await Transaction.create(transaction);

    const response = await request(app).get('/transactions/1');

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
  });
});
