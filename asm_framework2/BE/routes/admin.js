const express = require('express');
const categoriesController = require('../controllers/admin/category');
const userController = require('../controllers/admin/user');
const productController = require('../controllers/admin/product');
const path = require('path');
const multer = require('multer');

const router = express.Router();

// Khai báo sử dụng multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../assets/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route cho category
router.get('/category/list', categoriesController.list);
router.post('/category/create', categoriesController.create);
router.get('/category/edit/:id', categoriesController.edit);
router.post('/category/update/:id', categoriesController.update);
router.delete('/category/delete/:id', categoriesController.delete);

// Route cho product với multer
router.get('/product/list', productController.list);
router.post('/product/create', upload.single('image'), productController.create); // Đảm bảo middleware upload được sử dụng
router.get('/product/edit/:id', productController.edit);
router.post('/product/update/:id', upload.single('image'), productController.update); // Đảm bảo middleware upload được sử dụng
router.get('/product/delete/:id', productController.delete);

// Route cho user
router.get('/user/list', userController.list);
router.post('/user/create', userController.create);
router.get('/user/edit/:id', userController.edit);
router.post('/user/update/:id', userController.update);
router.get('/user/delete/:id', userController.delete);

module.exports = router;
