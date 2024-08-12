const db = require("../config/db");

module.exports = class User {
  constructor() {}

  // tất cả sản phẩm
  static async fetchAll() {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users`;
      db.query(sql, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // create
  static async create(user) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO users SET ?`;
      db.query(sql, user, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // edit
  static async edit(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ?`;
      db.query(sql, id, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // update
  static async update(id, arr) {
    return new Promise((resolve, reject) => {
      const [name, username, email, password, role, status] = arr;
      let sql = "";
      sql =
        "UPDATE users SET name = ?, username = ?, email = ?, password = ?, role = ?,status = ? WHERE id = ?";
      db.query(
        sql,
        [name, username, email, password, role, status, id],
        function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  // delete
  static async delete(id) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM users WHERE id = ?`;
      db.query(sql, id, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // 1 sản phẩm
  static async fetchUserDetails(id) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id = ?`;
      db.query(sql, id, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

    // 1 sản phẩm
    static async fetchUserDetails(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM users WHERE id = ?`;
            db.query(sql, id, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async findByUsername(username) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM users WHERE username = ?`;
            db.query(sql, [username], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
