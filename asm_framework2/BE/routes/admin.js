const express = require('express');
const categoriesController = require('../controllers/admin/category');
const userController = require('../controllers/admin/user');
const productController = require('../controllers/admin/product');
const dashboardController = require('../controllers/admin/dashboard');

// const productController = require('../controllers/admin/product');

const router = express.Router();
var multer = require('multer');
const path = require('path');
//khai báo sử dụng multer
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../assets/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
var upload = multer({ storage: storage })

//router dashboard
// router.get('/dashboard',dashboardController.dashboard);

// // router category 
// router.get('/category/list',categoriesController.list);
// router.get('/category/create',categoriesController.formCreate);
// router.post('/category/create',categoriesController.create);
// router.get('/category/edit/:id',categoriesController.edit);
// router.post('/category/update/:id',categoriesController.update);
// router.get('/category/delete/:id',categoriesController.delete);

// //router product
// router.get('/product/list',productController.list);
// router.get('/product/create',productController.formCreate);
// router.post('/product/create',upload.single('image'),productController.create);
// router.get('/product/edit/:id',productController.edit);
// router.post('/product/update/:id',upload.single('image'),productController.update);
// router.get('/product/delete/:id',productController.delete);


// //router user
// router.get('/user/list', userController.list);
// router.get('/user/create',userController.formCreate);
// router.post('/user/create',userController.create);
// router.get('/user/edit/:id',userController.edit);
// router.post('/user/update/:id',userController.update);
// router.get('/user/delete/:id',userController.delete);

module.exports = router;
