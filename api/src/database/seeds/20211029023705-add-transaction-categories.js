module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'transaction_categories',
      [
        {
          name: 'Débito',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Boleto',
          type: 'output',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Financiamento',
          type: 'output',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Crédito',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Recebimento Empréstimo',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vendas',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Recebimento TED',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Recebimento DOC',
          type: 'input',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Aluguel',
          type: 'output',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('transaction_categories', null, {});
  },
};
