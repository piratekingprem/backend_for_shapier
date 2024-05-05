const express = require('express')
const router = express.Router();
const {upload} = require('../helpers/commonHelper');

// App_controller
const test = require('../controllers/test');
const product = require('../controllers/product');
const product_category = require('../controllers/product_categories');
const product_brand = require('../controllers/product_brand');
const assest = require('../controllers/assest');
// TEST API
router.get('/test',test.get_test);
router.post('/test',test.store_test);

// PRODUCT API
router.get('/product',product.get_product);
router.get('/product/:id',product.get_product_id)
router.post('/product',upload.single('product_image'),product.store_product);
router.put('/product/:id',product.update_product);
router.delete('/product/:id',product.delete_product);

// PRODUCT_CATEGORIES API
router.get('/product_categories',product_category.get_product_categories);
router.get('/product/:id',product_category.get_product_category_by_id);
router.post('/product_categories',product_category.store_product_categories);
router.put('/product/:id',product_category.update_product_category);
router.delete('/product/:id',product_category.delete_product_category);

// PRODUCT_BRANDS API
router.get('/product_brand',product_brand.get_brand);
router.get('/product_brand/:id',product_brand.get_brand_by_id);
router.post('/product_brand',upload.single('product_image'),product_brand.store_brand);
router.put('/product_brand/:id',product_brand.update_brand);
router.delete('/product_brand/:id',product_brand.delete_brand);

// APP ASSEST
router.post('/assest',upload.single('assests'),assest.store_assest);
router.get('/assest',assest.get_assests);
router.get('/assests/:id',assest.get_single_assests);



module.exports = router;