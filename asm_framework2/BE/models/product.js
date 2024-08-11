const db = require("../config/db");

module.exports = class Product {
    constructor() { }

    // tất cả sản phẩm
    static async fetchAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM products`;
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
    static async create(product) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO products SET ?`;
            db.query(sql, product, function (err, data) {
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
            let sql = `SELECT * FROM products WHERE id = ?`;
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
    static async update(product, id) {
            return new Promise((resolve, reject) => {
                db.query('UPDATE products SET ? WHERE id=?', [product, id], function(err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
        }

    // delete 
    static async delete(id) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM products WHERE id = ?`;
            db.query(sql, id, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            })
        })
    }

    // 1 sản phẩm
    static async fetchProductDetails(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM products WHERE id = ?`;
            db.query(sql, id, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
