    const express = require('express');
    const User = require('../../models/user');
    const jwt = require('jsonwebtoken');
    const cookieParser = require('cookie-parser'); // Import cookie-parser

    const app = express();
    app.use(cookieParser());;
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

    // register
    // controllers/userAPIController.js

exports.register = async (req, res, next) => {
    try {
        console.log(req.body); // Kiểm tra cấu trúc của req.body
        const { name, username, email, password } = req.body;

        // Kiểm tra nếu có trường nào bị thiếu
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: 'Thiếu giá trị cho trường bắt buộc' });
        }

        // Kiểm tra trùng lặp username và email
        const usernameExists = await User.checkUsernameExists(username);
        if (usernameExists) {
            return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại' });
        }

        const emailExists = await User.checkEmailExists(email);
        if (emailExists) {
            return res.status(400).json({ message: 'Email đã tồn tại' });
        }

        // Tạo người dùng mới
        const data = {
            name,
            username,
            email,
            password,
            role: 1, // Role đã được gán cứng
            status: 1 // Status đã được gán cứng
        };

        const result = await User.create(data);
        if (result) {
            res.status(200).json({ data: result });
        } else {
            res.status(500).send("Lỗi truy vấn");
        }
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({ message: 'Đăng ký không thành công', error: error.message });
    }
}

    exports.login = async (req, res, next) => {
        try {
            const { username, password } = req.body;

            // Tìm người dùng dựa trên tên đăng nhập
            const users = await User.findByUsername(username);
            if (users.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            const user = users[0];

            // Kiểm tra mật khẩu
            const passwordIsValid = (password === user.password);
            if (!passwordIsValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Tạo payload và JWT token
            const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name,
                role: user.role,
                status: user.status
            };
            const token = jwt.sign(payload, process.env.MY_SECRET, {
                expiresIn: '24h' // Thời gian hết hạn token (24 giờ)
            });

            // Cấu hình cookie
            res.cookie('accessToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Đặt secure: true nếu sử dụng HTTPS
                maxAge: 86400 * 1000 // Thời gian hết hạn cookie (24 giờ)
            });

            // Trả về dữ liệu người dùng và token
            res.status(200).json({
                token, // Trả về token riêng biệt
                ...payload,
                message: 'Login successful'
            });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Failed to log in', error: error.message });
        }
    };
    const getUserFromToken = (token) => {
        try {
            return jwt.verify(token, process.env.MY_SECRET);
        } catch (error) {
            return null;
        }
    };

    // Trong API profile của bạn
    exports.getProfile = (req, res, next) => {
        const token = req.cookies.accessToken;
        const user = getUserFromToken(token);
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };
    // logout
    exports.logout = (req, res, next) => {
        try {
            res.clearCookie('accessToken', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.status(200).json({ message: 'Logout successful' });
        } catch (error) {
            console.error('Error logging out:', error);
            res.status(500).json({ message: 'Failed to log out', error: error.message });
        }
    };

