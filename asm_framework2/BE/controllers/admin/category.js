const axios = require('axios');

exports.list = async (req, res, next) => {
    try {
        const response = await axios.get('http://localhost:5000/api/category/list');
        res.render('admin/category/list', { data: response.data.data });
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
        status: req.body.status,
    };
    try {
        const response = await axios.post("http://localhost:5000/api/category/create", data);
        if (response.status === 200) {
            res.redirect("/admin/category/list?success=true&action=create");
        }
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.edit = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`http://localhost:5000/api/category/edit/${id}`);
        res.render('admin/category/edit', { data: response.data.data });
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const data = {
        name: req.body.name,
        status: req.body.status
    }
    try {
        const response = await axios.put(`http://localhost:5000/api/category/update/${id}`, data);
        if (response.status === 200) {
            res.redirect("/admin/category/list?success=true&action=update");
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
        const response = await axios.delete(`http://localhost:5000/api/category/delete/${id}`);
       
        // Kiểm tra xem `response.data.data` có phải là false không
        if (response.data.data === 200) {
            res.redirect('/admin/category/list?success=false&action=delete')
         
        } else {
            res.redirect('/admin/category/list?success=true&action=delete');
        }
    } catch (err) {
        console.error("Error deleting category:", err);
        res.status(500).send("Internal Server Error");
    }
}

