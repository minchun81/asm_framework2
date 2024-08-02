const express = require('express');
const categoryAPIController = require('../controllers/api/category');
const userAPIController = require('../controllers/api/user')
const productAPIController = require ('../controllers/api/product');
const router = express.Router();
//router category
router.get('/category/list', categoryAPIController.list)
router.post('/category/create', categoryAPIController.create);
router.get('/category/edit/:id', categoryAPIController.edit);
router.put('/category/update/:id', categoryAPIController.update);
router.delete('/category/delete/:id', categoryAPIController.delete);

// router user
router.get('/user',userAPIController.list);
router.post('/user',userAPIController.create);
router.get('/user/:id',userAPIController.fetchUserDetails);
router.put('/user/:id',userAPIController.update);
router.delete('/user/:id',userAPIController.delete);

//router product
router.get('/product',productAPIController.list);
router.post('/product',productAPIController.create);
router.get('/product/:id',productAPIController.fetchProductDetails);
router.put('/product/:id',productAPIController.update);
router.delete('/product/:id',productAPIController.delete);

module.exports = router;