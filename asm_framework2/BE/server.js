const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv
const port = 3000;
// Gọi hàm config từ dotenv để tải các biến môi trường
dotenv.config();
app.use(express.json()); // 
// Call db
// const mydb = require("./config/db");
app.use(bodyParser.json());
// Sử dụng các middleware
app.use(cookieParser()); // Sử dụng cookie-parser
app.use(bodyParser.urlencoded({ extended: false })); // Sử dụng body-parser
app.use(express.json()); // Xử lý dữ liệu JSON
app.use(express.static('assets')); // Chỉ định thư mục gốc cho tài nguyên static
app.set('view engine', 'ejs'); // Thiết lập view engine
app.use(cors()); // Sử dụng cors


// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes); // Sử dụng router admin

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); // Sử dụng router api

// Khởi động server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
