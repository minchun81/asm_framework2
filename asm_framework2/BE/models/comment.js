const db = require("../config/db");

module.exports = class Comment {
    constructor() { }

    // tất cả sản phẩm
    static async fetchAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM comments`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    // create
    static async create(comments) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO comments SET ?`;
            db.query(sql, comments, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    // delete 
    static async delete(id){
        return new Promise((resolve,reject)=>{
            let sql = `DELETE FROM comments WHERE id = ?`;
            db.query(sql,id,function(err,data){
                if(err){
                    reject(err);
                } else{
                    resolve(data)
                }
            })
        })
    }

    static async check(id){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM comments WHERE id = ?`;
            db.query(sql,id,function(err,data){
                if(err){
                    reject(err);
                } else{
                    resolve(data)
                }
            })
        })
    }
}
