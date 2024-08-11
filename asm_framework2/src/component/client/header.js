// src/Header.js
import React from 'react';
// import './Header.css'; // Nếu bạn có CSS riêng cho header

import '../../assets/bootstrap/css/bootstrap-grid.css.map'
  import '../../assets/bootstrap/css/bootstrap-grid.css'
  import '../../assets/bootstrap/css/bootstrap-grid.min.css'
  import '../../assets/bootstrap/css/bootstrap-grid.min.css.map'
  import '../../assets/bootstrap/css/bootstrap-reboot.css'
  import '../../assets/bootstrap/css/bootstrap-reboot.css.map'
  import '../../assets/bootstrap/css/bootstrap-reboot.min.css'
  import '../../assets/bootstrap/css/bootstrap-reboot.min.css.map'
  import '../../assets/bootstrap/css/bootstrap.css'
  import '../../assets/bootstrap/css/bootstrap.css.map'
  import '../../assets/bootstrap/css/bootstrap.css.map'
  import '../../assets/bootstrap/css/bootstrap.min.css.map'
 

  import '../../assets/css/all.min.css'
  import '../../assets/css/animate.css'
  import '../../assets/css/magnific-popup.css'
  import '../../assets/css/main.css'
  import '../../assets/css/owl.carousel.css'
  import '../../assets/css/meanmenu.min.css'
  import '../../assets/css/responsive.css'
  import logo from "../../assets/img/logo.png"
const Header = () => {
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
                                            <a href="/">Home</a>
                                           
                                        </li>
                                        <li><a href="/about">About</a></li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                               
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/cart">Cart</a></li>
                                                
                                                <li><a href="/contact">Contact</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="/shop">Shop</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">News</a>
                                            <ul className="sub-menu">
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="single-news.html">Single News</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li>
                                            <a href="/shop">Shop</a>
                                            {/* <ul className="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <div className="header-icons">
                                            <a className="" href="/login"><i className="fas fa-sign-in-alt"></i></a>
                                                <a className="shopping-cart" href="/cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
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
