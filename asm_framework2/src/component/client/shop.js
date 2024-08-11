import React, { useState, useEffect } from "react";
import Header from './header';
import Footer from './footer';
import { getProduct } from "../../services/product";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct("http://localhost:3001/api", setProduct, setError); // Đảm bảo đúng URL API
  }, []);

  return (
    <>
      <Header />
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
            {product.length > 0 ? (
              product.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 text-center">
                  <div className="single-product-item">
                    <div className="product-image">
                      <a href="single-product.html"><img src={item.image} alt={item.name} /></a>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="product-price"><span>Giá mỗi Kg</span> {item.price}$</p>
                    <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ</a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 text-center">
                <p>Không có sản phẩm nào</p>
              </div>
            )}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li><a href="#">Trước</a></li>
                  <li><a className="active" href="#">1</a></li>
                  <li><a  href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">Tiếp theo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
