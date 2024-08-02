const express = require('express');
const axios = require('axios');
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

        const data = {
            name: req.body.name,
            category_id: req.body.category_id,
            unit:req.body.unit,
            price: req.body.price,
            status: req.body.status,
            image: file.filename,
            description: req.body.description
        };

        // Check if any fields are null or undefined
        for (const key in data) {
            if (data[key] === null || data[key] === undefined) {
                console.error(`Missing value for ${key}`);
            }
        }

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



exports.update = async (req, res, next) => {
    try {
        const name= req.body.name;
        const category_id= req.body.category_id;
        const unit = req.body.unit;
        const price = req.body.price;
        const status = req.body.status;
        const image = file.filename;
        const description = req.body.description;

        // Prepare the array of values to update
        const arr = [name, category_id, unit, price, status, image, description];

        // Call the User model's update method
        const result = await Product.update(id, arr);

        if (result.affectedRows > 0) {
            res.status(200).json({
                message: "User updated successfully",
                data: result
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
}


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
        const result = await User.fetchProductDetails(id);
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