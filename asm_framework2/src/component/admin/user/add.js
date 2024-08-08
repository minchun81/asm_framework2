import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "../../../assets/css/styleEdit.css";
import { useNavigate } from 'react-router-dom';
import { addUsers } from '../../../services/user';
import CryptoJS from 'crypto-js';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = "Tên đăng nhập là bắt buộc.";
    if (!email) {
      errors.email = "Email là bắt buộc.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email không hợp lệ.";
    }
    if (!password) errors.password = "Mật khẩu là bắt buộc.";
    if (!role) errors.role = "Vai trò là bắt buộc.";
    if (!status) errors.status = "Trạng thái là bắt buộc.";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    // Mã hóa mật khẩu bằng MD5
    const hashedPassword = CryptoJS.MD5(password).toString();

    const userData = { username, email, password: hashedPassword, role, status };

    addUsers(userData, (response) => {
      setSuccessMessage('Thêm người dùng thành công!');
      setErrorMessage('');
      navigate('/admin/user'); // Điều hướng tới trang quản lý người dùng
    }, (error) => {
      setSuccessMessage('');
      setErrorMessage(error);
    });
  };

  return (
    <div>
      <Header />
      <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Thêm Người Dùng</h4>
            <form className="form-horizontal form-material mx-2" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="col-md-12 mb-0">Tên Đăng Nhập</label>
                <div className="col-md-12">
                  <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="form-control-line border-input" 
                    placeholder="Nhập tên đăng nhập"
                  />
                  {formErrors.username && <p className="text-danger">{formErrors.username}</p>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-md-12 mb-0">Email</label>
                <div className="col-md-12">
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="form-control-line border-input" 
                    placeholder="Nhập email"
                  />
                  {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-md-12 mb-0">Mật Khẩu</label>
                <div className="col-md-12">
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="form-control-line border-input" 
                    placeholder="Nhập mật khẩu"
                  />
                  {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-md-12 mb-0">Vai Trò</label>
                <div className="col-md-12">
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control-line border-input"
                  >
                    <option value="">Chọn vai trò</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  {formErrors.role && <p className="text-danger">{formErrors.role}</p>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="col-md-12 mb-0">Trạng Thái</label>
                <div className="col-md-12">
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control-line border-input"
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {formErrors.status && <p className="text-danger">{formErrors.status}</p>}
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 d-flex">
                  <button type="submit" className="btn btn-success mx-auto mx-md-0 text-white">Thêm Người Dùng</button>
                </div>
              </div>
            </form>
            {successMessage && <p className="text-success">{successMessage}</p>}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddUser;
