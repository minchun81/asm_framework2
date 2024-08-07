//sử dung module database
var mysql = require('mysql');
// create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'framework2'
});
db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
    });
module.exports = db;