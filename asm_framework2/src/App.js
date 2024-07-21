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
