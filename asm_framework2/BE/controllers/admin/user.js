const axios = require('axios');

exports.list = async (req, res, next) => {
    try {
        const response = await axios.get('http://localhost:3000/api/users/list');
        res.render('admin/user/list', { data: response.data.data });
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
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        status: req.body.status
    };
    try {
        const response = await axios.post("http://localhost:3000/api/user/create", data);
        if (response.status === 200) {
            res.redirect("/admin/user/list?success=true&action=create");
        }
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.edit = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/api/user/edit/${id}`);
        res.render('admin/user/edit', { data: response.data.data });
    } catch (err) {
        console.error("Error", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const data = {
        username: req.body.name,
        email: req.body.email,
        password: hashPassword,
        role: req.body.role,
        status: req.body.status,
    }
    try {
        const response = await axios.put(`http://localhost:3000/api/user/update/${id}`, data);
        if (response.status === 200) {
            res.redirect("/admin/user/list?success=true&action=update");
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
        const response = await axios.delete(`http://localhost:3000/api/user/delete/${id}`);
       
        // Kiểm tra xem `response.data.data` có phải là false không
        if (response.data.data === 200) {
            res.redirect('/admin/user/list?success=false&action=delete')
         
        } else {
            res.redirect('/admin/user/list?success=true&action=delete');
        }
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send("Internal Server Error");
    }
}

