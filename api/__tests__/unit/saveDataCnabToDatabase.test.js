import SaveDataCnabToDatabase from '../../src/services/SaveDataCnabToDatabase';

describe('create register from cnab', () => {
  it('should be able to register store and transaction from cnab', () => {
    const data = {
      type: 3,
      date: '2019-03-01',
      value: 14200,
      cpf: '09620676017',
      card: '4753****3153',
      time: '15:34:53',
      name: 'JOÃO MACEDO',
      store: 'BAR DO JOÃO',
    };

    const save = SaveDataCnabToDatabase.run(data);

    expect(save).toHaveProperty('id');
  });
});
