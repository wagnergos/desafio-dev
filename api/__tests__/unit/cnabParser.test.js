import CnabParser from '../../src/app/services/CnabParser';

describe('cnab parser service', () => {
  it('should be able to return transactions array', () => {
    const text = `3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO
      5201903010000013200556418150633123****7687145607MARIA JOSEFINALOJA DO Ó - MATRIZ`;

    const expectResult = [
      {
        type: 3,
        date: { year: '2019', month: '03', day: '01' },
        value: 14200,
        cpf: '09620676017',
        card: '4753****3153',
        time: { hour: '15', minutes: '34', seconds: '53' },
        name: 'JOÃO MACEDO',
        store: 'BAR DO JOÃO',
      },
      {
        type: 5,
        date: { year: '2019', month: '03', day: '01' },
        value: 13200,
        cpf: '55641815063',
        card: '3123****7687',
        time: { hour: '14', minutes: '56', seconds: '07' },
        name: 'MARIA JOSEFINA',
        store: 'LOJA DO Ó - MATRIZ',
      },
    ];

    const cnabParse = CnabParser.run(text);

    expect(cnabParse).toStrictEqual(expectResult);
  });
});
