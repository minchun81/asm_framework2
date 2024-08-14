const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv
const multer = require('multer'); // Import multer
const path = require('path'); // Import path để xử lý đường dẫn tệp

dotenv.config(); // Nạp biến môi trường

console.log('MY_SECRET:', process.env.MY_SECRET);

// Cấu hình multer để lưu hình ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Đường dẫn thư mục lưu hình ảnh
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đổi tên file để tránh trùng
  }
});
const upload = multer({ storage });

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets')); // Chỉ định thư mục gốc cho tài nguyên static
app.use(express.static('uploads')); // Đảm bảo thư mục uploads có thể truy cập được
app.set('view engine', 'ejs'); // Thiết lập view engine
app.use(cors()); // Sử dụng cors

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); // Sử dụng router api

// Route xử lý upload hình ảnh
app.post('/upload', upload.single('image'), (req, res) => {
  // req.file chứa thông tin tệp hình ảnh
  // req.body chứa các trường dữ liệu khác
  const { name, price, category_id, description, status } = req.body;
  const image = req.file ? req.file.filename : null;

  // Xử lý lưu trữ sản phẩm hoặc các công việc khác
  // Ví dụ: lưu vào database, trả kết quả thành công
  res.json({ message: 'Hình ảnh được tải lên thành công!', image });
});

// Khởi động server
app.listen(3001, () => {
    console.log("Server is running on port 3001"); // Thông báo server đang chạy
});
