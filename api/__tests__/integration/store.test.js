import request from 'supertest';

import app from '../../src/app';
import Store from '../../src/app/models/Store';

describe('User', () => {
  it('should be able to list all stores', async () => {
    const store = { name: 'Test sample name', owner_name: 'Test sample name' };

    await Store.create(store);

    const response = await request(app).get('/stores');

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });
});
