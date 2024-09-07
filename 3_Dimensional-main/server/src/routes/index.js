const express = require('express');
const authRoutes = require('./auth-routes');

const modelRoutes=require('./3dmodel-router')
const materialRoutes=require('./material-router')
const adminController=require('./admin-router')

const router = express.Router();


router.route('/').get((_, res) => res.formatResponse('Working fine ... 🥰'));

const adminRoutes = require('./admin-routes');



router.route('/').get((_, res) => {
  res.formatResponse('Working fine ... 🥰');
});


router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

router.use('/gltf',modelRoutes)

router.use('/material',materialRoutes)

router.use('/admin',adminController)

module.exports = router;

