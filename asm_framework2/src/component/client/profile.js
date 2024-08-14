import React, { useEffect, useState } from 'react';
import { getProfile } from '../../services/Auth'; // Import hàm getProfile từ services
import Header from './header';
import Footer from './footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await getProfile();
        setProfile(result.user); // Lưu thông tin người dùng vào state
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Hiển thị thông báo đang tải
  }

  if (!profile) {
    return <div>Thông tin người dùng không có sẵn.</div>; // Hiển thị thông báo nếu không có thông tin người dùng
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Profile</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Avatar"
                  className="rounded-circle img-thumbnail"
                />
              </div>
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="name"><i className="bi bi-person-fill"></i> Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={profile.name}
                    readOnly
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="username"><i className="bi bi-person-badge-fill"></i> Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={profile.username}
                    readOnly
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email"><i className="bi bi-envelope-fill"></i> Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={profile.email}
                    readOnly
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password"><i className="bi bi-lock-fill"></i> Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value="********"
                    readOnly
                  />
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary w-100">Update Profile</button>
                  <a href='/login' className='btn btn-primary'>Logout</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
