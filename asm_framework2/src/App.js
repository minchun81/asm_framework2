import React from "react";
  import './App.css';
  import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,  Outlet,  Navigate  } from "react-router-dom";
  import { useCookies } from 'react-cookie';
  import Home from './component/client/home';
  import About from './component/client/about'
  import Shop from './component/client/shop';
  import Detail from './component/client/detail';
  import Cart from './component/client/cart';
  import Contact from './component/client/contact';


  import './assets/bootstrap/css/bootstrap-grid.css.map'
  import './assets/bootstrap/css/bootstrap-grid.css'
  import './assets/bootstrap/css/bootstrap-grid.min.css'
  import './assets/bootstrap/css/bootstrap-grid.min.css.map'
  import './assets/bootstrap/css/bootstrap-reboot.css'
  import './assets/bootstrap/css/bootstrap-reboot.css.map'
  import './assets/bootstrap/css/bootstrap-reboot.min.css'
  import './assets/bootstrap/css/bootstrap-reboot.min.css.map'
  import './assets/bootstrap/css/bootstrap.css'
  import './assets/bootstrap/css/bootstrap.css.map'
  import './assets/bootstrap/css/bootstrap.css.map'
  import './assets/bootstrap/css/bootstrap.min.css.map'

  import './assets/css/all.min.css'
  import './assets/css/animate.css'
  import './assets/css/magnific-popup.css'
  import './assets/css/main.css'
  import './assets/css/owl.carousel.css'
  import './assets/css/meanmenu.min.css'
  import './assets/css/responsive.css'
//admin
import Profile from "./component/admin/profile/index";
import Categories from "./component/admin/categories/list";
import EditCategories from "./component/admin/categories/edit";
import AddCategories from "./component/admin/categories/add";
import Product from "./component/admin/product/list";
import EditProduct from "./component/admin/product/edit";
import AddProduct from "./component/admin/product/add";
import User from "./component/admin/user/list";
import EditUser from "./component/admin/user/edit";
import AddUser from "./component/admin/user/add";
import Layout from './component/admin/index';
import Login from "./component/client/login";
import Register from "./component/client/register";
// import ListCategory from "./component/admin/categories/list";
import AdminRoute from "./PrivateRoute";
// css
// import "./assets/images/favicon.png";
import './assets/plugins/chartist-js/dist/chartist.min.css';
import './assets/plugins/chartist-js/dist/chartist-init.css';
import './assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css';
import "./assets/plugins/c3-master/c3.min.css";
// import './assets/plugins/c3-master/c3.min.css';
import "./assets/css/style.min.css";
import ProfileClient from "./component/client/profile";
// import './assets/js/pages/dashboards/dashboard1';
  function App() {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
        {/* Các route public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileClient />} />

        {/* Các route admin cần bảo vệ */}
        <Route path="/admin" element={
          <AdminRoute>
            <Layout />
          </AdminRoute>
        } />
        <Route path="/admin/profile" element={
          <AdminRoute>
            <Profile />
          </AdminRoute>
        } />
        <Route path="/admin/category" element={
          <AdminRoute>
            <Categories />
          </AdminRoute>
        } />
        <Route path="/admin/editCategory" element={
          <AdminRoute>
            <EditCategories />
          </AdminRoute>
        } />
        <Route path="/admin/addCategory" element={
          <AdminRoute>
            <AddCategories />
          </AdminRoute>
        } />
        <Route path="/admin/product" element={
          <AdminRoute>
            <Product />
          </AdminRoute>
        } />
        <Route path="/admin/addProduct" element={
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        } />
        <Route path="/admin/editProduct" element={
          <AdminRoute>
            <EditProduct />
          </AdminRoute>
        } />
        <Route path="/admin/user" element={
          <AdminRoute>
            <User />
          </AdminRoute>
        } />
        <Route path="/admin/addUser" element={
          <AdminRoute>
            <AddUser />
          </AdminRoute>
        } />
        <Route path="/admin/editUser/:id" element={
          <AdminRoute>
            <EditUser />
          </AdminRoute>
        } />
      </Route>
      )
    );
    return (
      <RouterProvider router={router} />
    );
  }

  export default App;
