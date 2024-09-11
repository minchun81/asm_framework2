// src/Header.js
import React from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css'; // Gộp các tệp CSS Bootstrap
import '../../assets/css/all.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/main.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/meanmenu.min.css';
import '../../assets/css/responsive.css';
import logo from "../../assets/img/logo.png";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    
  const [, , removeCookie] = useCookies(['token', 'role' ,'name', 'username', 'email']);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa cookie
    removeCookie('token');
    removeCookie('role');
    removeCookie('name');
    removeCookie('username');
    removeCookie('email');

    // Điều hướng đến trang đăng nhập
    navigate('/login');
  };
    return (
        <>
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                <div className="site-logo">
                                    <a href="/">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </div>
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item">
                                            <a href="/">Trang chủ</a>
                                        </li>
                                        <li><a href="/about">Giới thiệu</a></li>
                                        <li>
                                            <a href="#">Trang</a>
                                            <ul className="sub-menu">
                                                <li><a href="/about">Giới thiệu</a></li>
                                                <li><a href="/cart">Giỏ hàng</a></li>
                                                <li><a href="/contact">Liên hệ</a></li>
                                                <li><a href="/news">Tin tức</a></li>
                                                <li><a href="/shop">Cửa hàng</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Tin tức</a>
                                            <ul className="sub-menu">
                                                <li><a href="/news">Tin tức</a></li>
                                                <li><a href="/single-news">Tin tức chi tiết</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Liên hệ</a></li>
                                        <li>
                                            <a href="/shop">Cửa hàng</a>
                                        </li>
                                        <li>
                                            <div className="header-icons">
                                            <a className="" href="/login"><i className="fas fa-sign-in-alt"></i></a>
                                            <a className="profile-icon" href="/profile"><i className="fas fa-user"></i></a>
                                            <a className="shopping-cart" href="/cart"><i className="fas fa-shopping-cart"></i></a>
                                            <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                                            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
