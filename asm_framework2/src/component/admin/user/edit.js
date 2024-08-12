import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../layouts/header";
import Footer from "../layouts/footer";

import { getUserById, updateUser } from '../../../services/user';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const fetchUser = () => {
      getUserById(id, (userData) => {
        if (userData) {
          setUser(userData);
          setUsername(userData.username);
          setName(userData.name);
          setEmail(userData.email);
          setRole(userData.role);
          setStatus(userData.status);
          setLoading(false);
        } else {
          setError('User not found');
          setLoading(false);
        }
      }, (error) => {
        setError(error);
        setLoading(false);
      });
    };

    fetchUser();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};
    if (!name) {
      errors.name = 'Tên không được để trống';
    }
    if (!email) {
      errors.email = 'Email không được để trống';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const updatedUser = { name, username, email, role, status };

    updateUser(id, updatedUser, (response) => {
      setSuccessMessage('User updated successfully');
      setError('');
      navigate('/admin/user');
    }, (error) => {
      setSuccessMessage('');
      setError(error);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Chỉnh Sửa Người Dùng</h4>

              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className="col-md-12 mb-0" style={{ color: 'red' }}>Tên Đăng Nhập (không được sửa)</label>
                  <input
                    type="text"
                    className="form-control-line border-input"
                    value={username}
                    readOnly
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="col-md-12 mb-0">Tên</label>
                  <input
                    type="text"
                    className="form-control-line border-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                   
                  />
                  {fieldErrors.name && (
                    <div style={{ color: 'red' }}>{fieldErrors.name}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="col-md-12 mb-0">Email</label>
                  <input
                    type="email"
                    className="form-control-line border-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  
                  />
                  {fieldErrors.email && (
                    <div style={{ color: 'red' }}>{fieldErrors.email}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="col-md-12 mb-0">Vai Trò</label>
                  <select
                    className="form-control-line border-input"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Chọn vai trò</option>
                    <option value="1">Admin</option>
                    <option value="0">User</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="col-md-12 mb-0">Trạng Thái</label>
                  <select
                    className="form-control-line border-input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value="1">hoạt động</option>
                    <option value="0">đang hoạt động</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">Cập Nhật</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditUser;
