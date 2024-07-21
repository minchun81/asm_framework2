import React from "react";
import logo from '../../../assets/images/logo-light-icon.png';
import logo2 from '../../../assets/images/logo-light-text.png';
import avt from '../../../assets/images/users/1.jpg';

import '../../../assets/css/styleEdit.css';


const Header = () => {
  return (
    
    <div className="">


      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <header className="topbar" data-navbarbg="skin6">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header" data-logobg="skin6">
              <a className="navbar-brand ms-4" href="/admin">
                <b className="logo-icon">
                  <img
                    src={logo}
                    
                    alt="homepage"
                    className="dark-logo"
                  />
                </b>
                <span className="logo-text">
                  <img
                    src={logo2}
                    alt="homepage"
                    className="dark-logo"
                  />
                </span>
              </a>
              <a
                className="nav-toggler waves-effect waves-light text-white d-block d-md-none"
                href="javascript:void(0)"
              >
                <i className="ti-menu ti-close"></i>
              </a>
            </div>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
              data-navbarbg="skin5"
            >
              <ul className="navbar-nav d-lg-none d-md-block">
                <li className="nav-item">
                  <a
                    className="nav-toggler nav-link waves-effect waves-light text-white"
                    href="javascript:void(0)"
                  >
                    <i className="ti-menu ti-close"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mt-md-0">
                <li className="nav-item search-box">
                  <a
                    className="nav-link text-muted"
                    href="javascript:void(0)"
                  >
                    <i className="ti-search"></i>
                  </a>
                  <form className="app-search" style={{ display: "none" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search &amp; enter"
                    />
                    <a className="srh-btn">
                      <i className="ti-close"></i>
                    </a>
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={avt}
                      alt="user"
                      className="profile-pic me-2"
                    />
                    Markarn Doe
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <aside className="left-sidebar" data-sidebarbg="skin6">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/admin"
                    aria-expanded="false"
                  >
                    <i className="mdi me-2 mdi-gauge"></i>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/admin/profile"
                    aria-expanded="false"
                  >
                    <i className="mdi me-2 mdi-account-check"></i>
                    <span className="hide-menu">Profile</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/admin/category"
                    aria-expanded="false"
                  >
                    <i className="mdi me-2 mdi-table"></i>
                    <span className="hide-menu">Category</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/admin/product"
                    aria-expanded="false"
                  >
                    <i className="mdi me-2 mdi-emoticon"></i>
                    <span className="hide-menu">Product</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/admin/user"
                    aria-expanded="false"
                  >
                    <i className="mdi me-2 mdi-earth"></i>
                    <span className="hide-menu">User</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sidebar-footer">
            <div className="row">
              <div className="col-4 link-wrap">
                <a
                  href=""
                  className="link"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Settings"
                >
                  <i className="ti-settings"></i>
                </a>
              </div>
              <div className="col-4 link-wrap">
                <a
                  href=""
                  className="link"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Email"
                >
                  <i className="mdi mdi-gmail"></i>
                </a>
              </div>
              <div className="col-4 link-wrap">
                <a
                  href=""
                  className="link"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Logout"
                >
                  <i className="mdi mdi-power"></i>
                </a>
              </div>
            </div>
          </div>
        </aside>

        
      </div>
    </div>
  );
};

export default Header;