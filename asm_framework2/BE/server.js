const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv

// Gọi hàm config từ dotenv để tải các biến môi trường
dotenv.config();

// Call db
const mydb = require("./config/db");

// Sử dụng các middleware
app.use(cookieParser()); // Sử dụng cookie-parser
app.use(bodyParser.urlencoded({ extended: false })); // Sử dụng body-parser
app.use(express.json()); // Xử lý dữ liệu JSON
app.use(express.static('assets')); // Chỉ định thư mục gốc cho tài nguyên static
app.set('view engine', 'ejs'); // Thiết lập view engine
app.use(cors()); // Sử dụng cors

// Call router
// const clientRoutes = require('./routes/client');
// app.use(clientRoutes); // Sử dụng router client

// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes); // Sử dụng router admin

// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes); // Sử dụng router api

// Khởi động server
app.listen(4000, () => {
    console.log("Server is running on port 4000"); // Thông báo server đang chạy
});
