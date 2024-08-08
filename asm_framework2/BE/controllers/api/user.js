const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/user')
exports.list = async (req, res, next) => {
    var result = await User.fetchAll()
    res.status(200).json({
        data: result
    })
}

exports.formCreate = async (req, res, next) => {
    res.render('admin/user/add');
}

//add
exports.create = async (req, res, next) => {
    try {
        console.log(req.body); // Check the structure of req.body

        const data = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            status: req.body.status
        };

        // Check if any fields are null or undefined
        for (const key in data) {
            if (data[key] === null || data[key] === undefined) {
                console.error(`Missing value for ${key}`);
            }
        }

        const result = await User.create(data);
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
        const id = req.params.id;
        const name = req.body.name;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password; // Ensure password is handled securely
        const role = req.body.role;
        const status = req.body.status;
        

        // Prepare the array of values to update
        const arr = [name, username, email, password , role, status];

        // Call the User model's update method
        const result = await User.update(id, arr);

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
        const result = await User.delete(id);
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

exports.fetchUserDetails = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await User.fetchUserDetails(id);if (result.length > 0) {
            res.status(200).json({ data: result[0] }); // result[0] as fetchUserDetails returns an array
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Failed to fetch user details', error: error.message });
    }
};