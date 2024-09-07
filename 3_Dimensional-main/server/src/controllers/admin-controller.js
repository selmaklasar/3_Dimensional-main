





const { getIo } = require('../libs/socket-io');
const clothServices = require('../services/cloth-services');

module.exports = {
  async registerCloth(req, res, next) {
    try {
      const clothData = req.body;
      const newCloth = await clothServices.createCloth(clothData);
      res.formatResponse(newCloth);
    } catch (error) {
      next(error);
    }
  },

  async listAllClothes(_, res, next) {
    try {
      const clothes = await clothServices.listClothes();
      res.formatResponse(clothes);
    } catch (error) {
      next(error);
    }
  },

  async getCloth(_, res, next) {
    try {
      const { id } = req.params;
      const cloth = await clothServices.findCloth(id);
      res.formatResponse(cloth);
    } catch (error) {
      next(error);
    }
  },

  async updateCloth(_, res, next) {
    try {
      const { id } = req.params;
      const cloth = await clothServices.updateCloth(id);
      res.formatResponse(cloth);
    } catch (error) {
      next(error);
    }
  },

  async deleteCloth() {
    try {
      const { id } = req.params;
      const cloth = await clothServices.deleteCloth(id);
      res.formatResponse(cloth);
    } catch (error) {
      next(error);
    }
  },

  async testEmpty(_, res, next) {
    try {
      const message = 'The inventory is empty. Please add products';
      const io = getIo();
      io.emit('inventory-empty', {
        message,
      });
      res.formatResponse('Empty message has been sent');
    } catch (error) {
      next(error);
    }
  },
};


