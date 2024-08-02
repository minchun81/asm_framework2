// db.js
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  port: 3306, // Port mặc định của MySQL thường là 3306, không phải 3000
  user: 'root',
  password: '',
  database: 'framework2',
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  if (connection) connection.release();
  console.log('Connected to MySQL');
});

module.exports = db;
