  import './App.css';
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
import React from "react";
import Profile from "./component/admin/profile/index";
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
 
  

  import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 
  function App() {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
           <Route path="/admin" element={<Layout />} />    
           <Route path="/admin/profile" element={<Profile />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      )
    );
    return (
      <RouterProvider router={router} />
    );
  }

  export default App;
