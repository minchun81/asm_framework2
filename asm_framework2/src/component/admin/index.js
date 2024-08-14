import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Dashboard from "./dashboard/index";

const Layout = () => {
  const [cookies] = useCookies(['role']);
  const role = cookies.role;

  // Kiểm tra vai trò của người dùng và điều hướng nếu không phải admin
  if (role === '1') {
    return <Navigate to="/profile" />; // Nếu role là 1, chuyển hướng đến trang profile
  }

  return (
    <div className="">
      <Header />
      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
