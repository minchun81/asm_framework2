import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Header from './header';
import Footer from './footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile = () => {
  const [cookies] = useCookies(['name', 'email', 'username']);
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    // Lấy thông tin từ cookies
    setProfile({
      name: cookies.name || 'N/A',
      username: cookies.username || 'N/A',
      email: cookies.email || 'N/A',
    });
  }, [cookies]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Profile</h3>
            </div>
            <div className="card-body">
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
                <div className="text-center">
                  <button type="button" className="btn btn-primary w-100">Update Profile</button>
                  <a href='/login' className='btn btn-primary mt-2'>Logout</a>
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
