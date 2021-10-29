import Store from '../models/Store';

class StoreController {
  async index(req, res) {
    const stores = await Store.findAll({
      attributes: ['id', 'name', 'owner_name'],
    });

    return res.json(stores);
  }
}

export default new StoreController();
