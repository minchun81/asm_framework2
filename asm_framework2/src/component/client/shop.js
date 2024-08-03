// src/Shop.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import product1 from "../../assets/img/products/product-img-1.jpg";
import product2 from "../../assets/img/products/product-img-2.jpg";
import product3 from "../../assets/img/products/product-img-3.jpg";
import product4 from "../../assets/img/products/product-img-4.jpg";
import product5 from "../../assets/img/products/product-img-5.jpg";
import product6 from "../../assets/img/products/product-img-6.jpg";
// Ensure to have the relevant styles in this CSS file

const Shop = () => {
  return (
    <>
    <Header/>
      {/* Khu vực tìm kiếm */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Tìm kiếm:</h3>
                  <input type="text" placeholder="Từ khóa" />
                  <button type="submit">Tìm kiếm <i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Breadcrumb */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Tươi và Hữu cơ</p>
                <h1>Cửa hàng</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Các sản phẩm */}
      <div className="product-section mt-150 mb-150">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className="active" data-filter="*">Tất cả</li>
                  <li data-filter=".strawberry">Dâu tây</li>
                  <li data-filter=".berry">Quả mọng</li>
                  <li data-filter=".lemon">Chanh</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            <div className="col-lg-4 col-md-6 text-center strawberry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product1} alt="Dâu tây" /></a>
                </div>
                <h3>Dâu tây</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 85$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center berry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product2} alt="Quả mọng" /></a>
                </div>
                <h3>Quả mọng</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 70$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center lemon">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product3} alt="Chanh" /></a>
                </div>
                <h3>Chanh</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 35$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product4} alt="Bơ" /></a>
                </div>
                <h3>Bơ</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 50$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product5} alt="Táo xanh" /></a>
                </div>
                <h3>Táo xanh</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 45$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center strawberry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product6} alt="Dâu tây" /></a>
                </div>
                <h3>Dâu tây</h3>
                <p className="product-price"><span>Giá mỗi Kg</span> 80$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li><a href="#">Trước</a></li>
                  <li><a href="#">1</a></li>
                  <li><a className="active" href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">Tiếp theo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <Footer/>
    </>
  );
};

export default Shop;
