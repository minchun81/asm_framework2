import React, { useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { getUsers, deleteUser } from "../../../services/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Hàm để lấy tên hiển thị của vai trò
const getRoleDisplayName = (role) => {
  switch (role) {
    case 1:
      return "Admin";
    case 0:
      return "User";
    default:
      return "Unknown";
  }
};

// Hàm để lấy tên hiển thị của trạng thái
const getStatusDisplayName = (status) => {
  switch (status) {
    case 1:
      return "hoạt động";
    case 0:
      return "không hoạt động";
    default:
      return "chưa nhận dạng";
  }
};

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users per page

  useEffect(() => {
    const fetchUsers = () => {
      getUsers("http://localhost:3001/api", setUsers, setError); // Đảm bảo đúng URL API
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    // Filter users based on searchTerm
    const results = users.filter(user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
    setCurrentPage(1); // Reset to first page when search term changes
  }, [searchTerm, users]);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ?")) {
      deleteUser(
        id,
        () => {
          toast.success("Xóa người dùng thành công !");
          setError(""); // Clear any previous errors
          // Refresh the user list after a successful delete
          getUsers("http://localhost:3001/api", setUsers, setError); // Ensure correct API URL
        },
        (error) => {
          toast.error(error || "An error occurred while deleting the user.");
        }
      );
    }
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh Sách Người Dùng</h4>
              <span>
                <a href="/admin/addUser" className="btn btn-primary mb-3">
                  Thêm Người Dùng
                </a>
              </span>

              <div className="mb-3">
              <input
  type="text"
  className="form-control"
  placeholder="Tìm kiếm người dùng"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    padding: "0.25rem 0.5rem",  // Thay đổi kích thước padding
    fontSize: "0.875rem",        // Thay đổi kích thước font
    borderRadius: "0.2rem",      // Thay đổi bo tròn góc nếu cần
    width: "200px"               // Đặt kích thước chiều rộng cho input
  }}
/>

              </div>

              <div className="table-responsive">
                <table className="table user-table">
                  <thead>
                    <tr>
                      <th className="border-top-0">ID</th>
                      <th className="border-top-0">Tên Đăng Nhập</th>
                      <th className="border-top-0">Tên</th>
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
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{getRoleDisplayName(user.role)}</td>
                          <td>{getStatusDisplayName(user.status)}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <span>
                                <a
                                  href={`/admin/editUser/${user.id}`}
                                  className="btn btn-primary"
                                >
                                  Sửa
                                </a>
                              </span>
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
                        <td colSpan="7">Không có người dùng nào</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  &lt; Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer /> {/* Add ToastContainer to display toast notifications */}
    </div>
  );
};

export default ListUser;
