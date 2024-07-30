const mysql = require("mysql")
const db = mysql.createPool({
    host:"localhost",
    port:3000,
    user:"root",
    password:"",
    database:""
})
db.getConnection(()=>{
    console.log("Connect successfully")
})

module.exports = db