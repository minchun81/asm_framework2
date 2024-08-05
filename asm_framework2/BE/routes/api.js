const express = require('express');
const multer = require('multer');

// Cấu hình lưu trữ và tên tệp
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/uploads/'); // Thay đổi đường dẫn thư mục lưu trữ theo nhu cầu của bạn
    },
    filename: function(req, file, cb) {
        const unifix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + unifix + file.originalname);
    }
});

// Khởi tạo middleware upload
const upload = multer({ storage: storage });

const categoryAPIController = require('../controllers/api/category');
const userAPIController = require('../controllers/api/user')
const productAPIController = require ('../controllers/api/product');
const router = express.Router();
//router category
<<<<<<< HEAD
router.get('/category/', categoryAPIController.list)
router.post('/category/', categoryAPIController.create);
=======
router.get('/category', categoryAPIController.list)
router.post('/category', categoryAPIController.create);
>>>>>>> nhanntpc03225
router.get('/category/:id', categoryAPIController.edit);
router.put('/category/:id', categoryAPIController.update);
router.delete('/category/:id', categoryAPIController.delete);

// router user
router.get('/user',userAPIController.list);
router.post('/user',userAPIController.create);
router.get('/user/:id',userAPIController.fetchUserDetails);
router.put('/user/:id',userAPIController.update);
router.delete('/user/:id',userAPIController.delete);

//router product
router.get('/product',productAPIController.list);
router.post('/product', upload.single('image'),productAPIController.create);
router.get('/product/:id',productAPIController.fetchProductDetails);
router.put('/product/:id', upload.single('image'),productAPIController.update);
router.delete('/product/:id',productAPIController.delete);

module.exports = router;