const express = require('express');
const multer = require('multer');

const materialController=require('../controllers/material-controller')

const materialUpload = multer();

const router = express.Router();


router.route('/upload/material').post(materialUpload.single('file'), materialController.materialUpload);
router.route('/get/image/:type').get(materialController.imageRetrival)

module.exports = router;
