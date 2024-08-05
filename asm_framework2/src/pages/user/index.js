// src/components/UserList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { users as userServices } from "../../services/index";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await userServices(); // Gọi hàm service để lấy danh sách người dùng
      setUsers(result || []); // Đảm bảo luôn gán một mảng, ngay cả khi result là null hoặc undefined
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container p-3">
      <h1 className="text-primary mb-3 text-center">Danh sách người dùng</h1>
      <Link className="btn btn-primary mb-3" to="/user-form">
        Thêm người dùng
      </Link>

      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}> {/* Sử dụng id hoặc một thuộc tính duy nhất làm key */}
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
