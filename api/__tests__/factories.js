/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import { factory } from 'factory-girl';

import Store from '../src/app/models/Store';

factory.define('Store', Store, {
  name: faker.name.findName,
  owner_name: faker.name.findName,
});

export default factory;
