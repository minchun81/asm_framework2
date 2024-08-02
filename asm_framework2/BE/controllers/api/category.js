const Category = require('../../models/category')
exports.list = async (req, res, next) => {
    var result = await Category.fetchAll()
    res.status(200).json({
        data: result
    })
}
exports.create = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            status: req.body.status
        }
        const result = await Category.create(data);
        if (result) {
            res.status(200).json({ data: result })
        } else {
            res.send("Lỗi truy vấn");
        }
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }

}

exports.edit = async (req, res, next) => {
    const id = req.params.id
    const result = await Category.edit(id);
    if (result) {
        res.status(200).json({
            data: result
        })
    } else {
        res.send("Lỗi truy vấn")
    }
}

exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const status = req.body.status;
        const arr = [name, status];
        const result = await Category.update(id, arr);
        if (result) {
            res.status(200).json({
                data: result
            })
        } else {
            res.send("Lỗi truy vấn");
        }
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ message: 'Failed to update category', error: error.message });
    }
}


exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;

        // Kiểm tra xem danh mục có tồn tại không
        const checkDelete = await Category.check(id);
        if (checkDelete.length === 0) {
            return res.status(404).json({ message: 'Category not found', data: false });
        }

        // Xóa danh mục
        const result = await Category.delete(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Category deleted successfully', data: true });
        } else {
            res.status(400).json({ message: 'Failed to delete category', data: false });
        }
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Failed to delete category', error: error.message });
    }
}