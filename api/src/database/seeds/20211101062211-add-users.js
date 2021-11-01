const bcrypt = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    const hash = await bcrypt.hash('desafiodev', 8);
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'desafiodev@email.com',
          password: hash,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
