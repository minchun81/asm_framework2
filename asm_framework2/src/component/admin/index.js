import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Dashboard from "./dashboard/index";
const layout = () => {
  return (
    <div className="">
      <Header />
      <Dashboard />

        {/* <Footer /> */}
    </div>
  );
};

export default layout;
