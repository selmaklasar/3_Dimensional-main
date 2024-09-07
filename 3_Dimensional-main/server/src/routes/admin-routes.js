const express = require('express');
const adminController = require('../controllers/admin-controller');

const router = express.Router();

router
  .route('/clothes')
  .get(adminController.listAllClothes)
  .post(adminController.registerCloth);

router
  .route('/clothes/:id')
  .patch(adminController.updateCloth)
  .delete(adminController.deleteCloth);

router.post('/test', adminController.testEmpty);

module.exports = router;

