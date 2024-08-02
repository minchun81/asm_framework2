const axios = require('axios');

exports.list = async (req, res, next) => {
    try {
        const response = await axios.get('http://localhost:5000/api/product/list');
        res.render('admin/product/list', { data: response.data.data });
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

// exports.formCreate = async (req, res, next) => {
//     res.render('admin/category/add');
// }

exports.create = async (req, res, next) => {
    const data = {
        name: req.body.name,
        category_id: req.body.category_id,
        unit:req.body.unit,
        price: req.body.price,
        status: req.body.status,
        image: file.filename,
        description: req.body.description
    };
    try {
        const response = await axios.post("http://localhost:5000/api/product/create", data);
        if (response.status === 200) {
            res.redirect("/admin/product/list?success=true&action=create");
        }
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.edit = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`http://localhost:5000/api/product/edit/${id}`);
        res.render('admin/product/edit', { data: response.data.data });
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const data = {
        name: req.body.name,
        category_id: req.body.category_id,
        unit:req.body.unit,
        price: req.body.price,
        status: req.body.status,
        image: file.filename,
        description: req.body.description
    }
    try {
        const response = await axios.put(`http://localhost:5000/api/product/update/${id}`, data);
        if (response.status === 200) {
            res.redirect("/admin/product/list?success=true&action=update");
        }
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

// const axios = require('axios');

exports.delete = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:5000/api/product/delete/${id}`);
       
        // Kiểm tra xem `response.data.data` có phải là false không
        if (response.data.data === 200) {
            res.redirect('/admin/product/list?success=false&action=delete')
         
        } else {
            res.redirect('/admin/product/list?success=true&action=delete');
        }
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send("Internal Server Error");
    }
}

