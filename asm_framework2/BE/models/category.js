const db = require("../config/db");

module.exports = class Category {
    constructor() { }

    // tất cả sản phẩm
    static async fetchAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM categories`;
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
    static async create(categories) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO categories SET ?`;
            db.query(sql, categories, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    // edit
    static async edit(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM categories WHERE id = ?`;
            db.query(sql, id, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    // update
    static async update(id,arr){
        return new Promise((resolve,reject)=>{
            const [name,status] = arr;
            let sql = `UPDATE categories SET name = ?, status = ? WHERE id = ?`;
            db.query(sql,[name,status,id],function(err,data){
                if(err){
                    reject(err);
                } else{
                    resolve(data);
                }
            })
        })
    }

    // delete 
    static async delete(id){
        return new Promise((resolve,reject)=>{
            let sql = `DELETE FROM categories WHERE id = ?`;
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
            let sql = `SELECT * FROM categories WHERE id = ?`;
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
