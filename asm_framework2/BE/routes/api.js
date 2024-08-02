const express = require('express');
const categoryAPIController = require('../controllers/api/category');
const router = express.Router();

router.get('/category/list', categoryAPIController.list)
router.post('/category/create', categoryAPIController.create);
router.get('/category/edit/:id', categoryAPIController.edit);
router.put('/category/update/:id', categoryAPIController.update);
router.delete('/category/delete/:id', categoryAPIController.delete);


module.exports = router;