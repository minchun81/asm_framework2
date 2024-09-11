import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// PrivateRoute để bảo vệ các route yêu cầu role là admin (role = 0)
const AdminRoute = ({ children }) => {
  const [cookies] = useCookies(['token', 'role']);
  const role = cookies.role;

  // Kiểm tra nếu role không phải là admin (role khác 0), điều hướng về trang home hoặc trang khác.
  if (role !== '0') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
