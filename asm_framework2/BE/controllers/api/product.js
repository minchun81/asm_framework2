const express = require('express');
const bcrypt = require('bcrypt');
const Product = require('../../models/product')
exports.list = async (req, res, next) => {
    var result = await Product.fetchAll()
    res.status(200).json({
        data: result
    })
}

exports.formCreate = async (req, res, next) => {
    res.render('admin/product/add');
}


exports.create = async (req, res, next) => {
    try {
        console.log(req.body); // Check the structure of req.body
        // let file = req.file;    
        const data = {
            name: req.body.name,
            category_id: req.body.category_id,
            price: req.body.price,
            status: req.body.status === "active" ? 1 : 0,
            image: req.body.image,
            description: req.body.description
        };



        const result = await Product.create(data);
        if (result) {
            res.status(200).json({ data: result });
        } else {
            res.send("Lỗi truy vấn");
        }
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
}



exports.update = async(req, res, next) => {
    try{
    let id = req.params.id;
    let file = req.file;    
    const data = {
        name: req.body.name,
        category_id: req.body.category_id,
        price: req.body.price,
        status: req.body.status,
        image: file.filename,
        description: req.body.description
    };
    // console.log(result);
    let result = await Product.update(data, id);
    res.status(201).json({ result: result, data: data });

}catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
}
   
};


exports.delete = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Product.delete(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.fetchProductDetails = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Product.fetchProductDetails(id);
        if (result.length > 0) {
            res.status(200).json({ data: result[0] }); // result[0] as fetchUserDetails returns an array
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Failed to fetch user details', error: error.message });
    }
};