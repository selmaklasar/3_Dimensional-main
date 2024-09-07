const express = require('express');
const multer=require('multer')
const modelUpload = multer();

const userPurchase=require('../controllers/user_purchure')


const router = express.Router();


router.route('/userpurchase/upload').post( modelUpload.single('file'),userPurchase.userPurchaseUpload);
router.route('/userpurchase/get').get(userPurchase.userPurchaseGet)

module.exports = router;
