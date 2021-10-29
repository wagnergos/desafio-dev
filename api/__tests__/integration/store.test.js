import request from 'supertest';

import factory from '../factories';

import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to list all stores', async () => {
    const user = await factory.attrs('Store');

    await request(app).post('/stores').send(user);

    const response = await request(app).get('/stores');

    expect(response.status).toBe(200);
  });
});
