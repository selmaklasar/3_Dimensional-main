const express = require('express');

const modelController=require('../controllers/3dmodel-controller')

const router = express.Router();

const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');


const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
 
    key: (req, file, cb) => {
   
    const fileName = `${file.originalname}`;
      
      console.log("File name:", fileName);
      cb(null, fileName);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE, 
  }),
  limits: { fileSize: 100 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'model/gltf-binary' && file.mimetype !== 'model/gltf+json') {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  },
});




router.route('/upload/gltf').post(upload.single('file'), modelController.gltfUpload);
router.route('/get_gltf/:model_name').get(modelController.gltfRetrival);

module.exports = router;
