import React, { useState, useEffect } from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getUsers, deleteUser } from '../../../services/user';

// Hàm để lấy tên hiển thị của vai trò
const getRoleDisplayName = (role) => {
  switch (role) {
    case 1:
      return 'Admin';
    case 0:
      return 'User';
    default:
      return 'Unknown';
  }
};

// Hàm để lấy tên hiển thị của trạng thái
const getStatusDisplayName = (status) => {
  switch (status) {
    case 1:
      return 'Active';
    case 0:
      return 'Inactive';
    default:
      return 'Unknown';
  }
};

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users per page

  useEffect(() => {
    const fetchUsers = () => {
      getUsers('http://localhost:3000/api/user', setUsers, setError); // Đảm bảo đúng URL API
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id, (response) => {
        setSuccessMessage('User deleted successfully');
        setError(''); // Xóa bất kỳ lỗi nào trước đó
        // Làm mới danh sách người dùng sau khi xóa thành công
        getUsers('http://localhost:3000/api/user', setUsers, setError); // Đảm bảo đúng URL API
      }, (error) => {
        setSuccessMessage(''); // Xóa bất kỳ thông báo thành công nào trước đó
        setError(error);
      });
    }
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh Sách Người Dùng</h4>
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <span><a href='/admin/addUser' className="btn btn-primary mb-3">Thêm Người Dùng</a></span>

              <div className="table-responsive">
                <table className="table user-table">
                  <thead>
                    <tr>
                      <th className="border-top-0">ID</th>
                      <th className="border-top-0">Tên Đăng Nhập</th>
                      <th className="border-top-0">Email</th>
                      <th className="border-top-0">Vai Trò</th>
                      <th className="border-top-0">Trạng Thái</th>
                      <th className="border-top-0">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.length > 0 ? (
                      currentUsers.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{getRoleDisplayName(user.role)}</td>
                          <td>{getStatusDisplayName(user.status)}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <span><a href={`/admin/editUser/${user.id}`} className="btn btn-primary">Sửa</a></span>
                              <span>
                                <button 
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(user.id)}
                                >
                                  Xóa
                                </button>
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6">Không có người dùng nào</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <nav>
                <ul className="pagination">
                  {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
                    <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button onClick={() => paginate(index + 1)} className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListUser;

