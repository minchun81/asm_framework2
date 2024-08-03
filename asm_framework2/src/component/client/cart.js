// src/Cart.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import product1 from "../../assets/img/products/product-img-1.jpg";
import product2 from "../../assets/img/products/product-img-2.jpg";
import product3 from "../../assets/img/products/product-img-3.jpg";
import product4 from "../../assets/img/products/product-img-4.jpg";
import product5 from "../../assets/img/products/product-img-5.jpg";
import product6 from "../../assets/img/products/product-img-6.jpg";

const Cart = () => {
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
                <h1>Giỏ hàng</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Phần Giỏ hàng */}
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove"></th>
                      <th className="product-image">Hình ảnh sản phẩm</th>
                      <th className="product-name">Tên</th>
                      <th className="product-price">Giá</th>
                      <th className="product-quantity">Số lượng</th>
                      <th className="product-total">Tổng cộng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-body-row">
                      <td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
                      <td className="product-image"><img src={product1} alt="Sản phẩm 1" /></td>
                      <td className="product-name">Dâu tây</td>
                      <td className="product-price">$85</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">$85</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
                      <td className="product-image"><img src={product2} alt="Sản phẩm 2" /></td>
                      <td className="product-name">Quả mọng</td>
                      <td className="product-price">$70</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">$70</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
                      <td className="product-image"><img src={product3} alt="Sản phẩm 3" /></td>
                      <td className="product-name">Chanh</td>
                      <td className="product-price">$35</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">$35</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Tổng cộng</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td><strong>Tạm tính: </strong></td>
                      <td>$500</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Vận chuyển: </strong></td>
                      <td>$45</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Tổng cộng: </strong></td>
                      <td>$545</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <a href="cart.html" className="boxed-btn">Cập nhật giỏ hàng</a>
                  <a href="checkout.html" className="boxed-btn black">Thanh toán</a>
                </div>
              </div>
              <div className="coupon-section">
                <h3>Áp dụng mã giảm giá</h3>
                <div className="coupon-form-wrap">
                  <form action="index.html">
                    <p><input type="text" placeholder="Mã giảm giá" /></p>
                    <p><input type="submit" value="Áp dụng" /></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Phần Carousel logo */}
      <div className="logo-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-carousel-inner">
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/1.png" alt="Logo 1" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/2.png" alt="Logo 2" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/3.png" alt="Logo 3" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/4.png" alt="Logo 4" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/5.png" alt="Logo 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
