const createHttpError = require('http-errors');
const Cloth = require('../models/Cloth');

module.exports = {
  async listClothes() {
    const clothes = await Cloth.find();
    return clothes;
  },

  async findCloth(id) {
    const foundCloth = await Cloth.findById(id);
    if (!foundCloth)
      throw createHttpError.BadRequest(
        'The cloth with provided id doesnot exists.'
      );
    return foundCloth;
  },

  async createCloth(clothData) {
    const newCloth = new Cloth(clothData);
    const savedCloth = await newCloth.save();
    return savedCloth;
  },

  async updateCloth(id, clothData) {
    await this.findCloth(id);
    const updatedCloth = await Cloth.findByIdAndUpdate(id, clothData);
    return updatedCloth;
  },

  async deleteCloth(id) {
    await this.findCloth(id);
    const deletedCloth = await Cloth.findByIdAndDelete(id);
    return deletedCloth;
  },
};

