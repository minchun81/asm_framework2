import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Admin from "./component/admin/index";
// import ListProduct from "./component/admin/product/list";
// import AddProduct from "./component/admin/product/add";
// import EditProduct from "./component/admin/product/edit";
// import ListUser from "./component/admin/user/list";
// import AddUser from "./component/admin/user/add";
// import EditUser from "./component/admin/user/edit";
import ListCategory from "./component/admin/categories/list";
import EditCategory from "./component/admin/categories/edit";
import AddCategory from "./component/admin/categories/add";

function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <AddProduct/> */}
      {/* <EditProduct /> */}
      {/* <ListProduct/> */}
      {/* <EditUser/> */}
      {/* <AddUser/> */}
      {/* <ListUser/> */}
      <EditCategory/>
      <AddCategory/>
      <ListCategory/>
      
    </div>

  );
}

export default App;
