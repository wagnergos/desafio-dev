import request from 'supertest';
import { resolve } from 'path';

import app from '../../src/app';

describe('upload cnab controller', () => {
  it('should be able to register a new transaction by cnab file', async () => {
    const response = await request(app)
      .post('/cnab')
      .attach('file', resolve(__dirname, '..', '..', '..', 'CNAB.txt'));

    expect(response.status).toBe(201);
  });
});
