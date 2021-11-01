import request from 'supertest';

import app from '../../src/app';

describe('User', () => {
  it('should be able to list all stores', async () => {
    const response = await request(app).get('/stores');

    expect(response.status).toBe(200);
  });
});
