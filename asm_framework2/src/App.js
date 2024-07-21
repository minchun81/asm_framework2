import React from "react";
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
// css
// import "./assets/images/favicon.png";
import './assets/plugins/chartist-js/dist/chartist.min.css';
import './assets/plugins/chartist-js/dist/chartist-init.css';
import './assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css';
import "./assets/plugins/c3-master/c3.min.css";
// import './assets/plugins/c3-master/c3.min.css';
import "./assets/css/style.min.css";
// import './assets/js/pages/dashboards/dashboard1';

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/admin" element={<Layout />} />    
        <Route path="/admin/profile" element={<Profile />} />
        {/* category */}
        <Route path="/admin/category" element={<Categories />} />
        <Route path="/admin/editCategory" element={<EditCategories />} />
        <Route path="/admin/addCategory" element={<AddCategories />} />
        {/*product */}
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/editProduct" element={<EditProduct />} />
        {/* user */}
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/addUser" element={<AddUser />} />
        <Route path="/admin/editUser" element={<EditUser />} />

      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
