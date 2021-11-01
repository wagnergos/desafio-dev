import GetStores from '../services/GetStores';

class StoreController {
  async index(req, res) {
    const stores = await GetStores.run();

    return res.json(stores);
  }
}

export default new StoreController();
