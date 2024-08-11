import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { getProduct } from "../../services/product";
import a from "../../assets/img/a.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    getProduct("http://localhost:3001/api", setProducts, setError); // Đảm bảo đúng URL API
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
      {/* Kết thúc khu vực tìm kiếm */}

      {/* Khu vực Hero */}
      <div className="hero-area hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  <p className="subtitle">Tươi và Hữu cơ</p>
                  <div className="hero-btns">
                    <a href="shop.html" className="boxed-btn">Bộ sưu tập trái cây</a>
                    <a href="contact.html" className="bordered-btn">Liên hệ chúng tôi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Kết thúc khu vực Hero */}

      {/* Phần danh sách tính năng */}
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="content">
                  <h3>Giao hàng miễn phí</h3>
                  <p>Khi đơn hàng trên $75</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h3>Hỗ trợ 24/7</h3>
                  <p>Nhận hỗ trợ cả ngày</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync"></i>
                </div>
                <div className="content">
                  <h3>Hoàn tiền</h3>
                  <p>Hoàn tiền trong vòng 3 ngày!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Kết thúc phần danh sách tính năng */}

      {/* Phần sản phẩm */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span className="orange-text">Sản phẩm</span> của chúng tôi</h3>
              </div>
            </div>
          </div>
          <div className="row">
          {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 text-center">
                  <div className="single-product-item">
                    <div className="product-image">
                      <a href={`/detail/${product.id}`}><img src={product.image} alt={product.name} /></a>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="product-price"><span>Trên mỗi Kg</span> {product.price}đ </p>
                    <a href="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ hàng</a>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-12 text-center">Không có sản phẩm nào để hiển thị.</p>
            )}
          </div>
        </div>
      </div>
      {/* Kết thúc phần sản phẩm */}

      {/* Phần banner giỏ hàng */}
      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
            <div className="image-column col-lg-6">
              <div className="image">
                <div className="price-box">
                  <div className="inner-price">
                    <span className="price">
                      <strong>30%</strong> <br /> giảm trên mỗi kg
                    </span>
                  </div>
                </div>
                <img src={a} alt="Banner" />
              </div>
            </div>
            <div className="content-column col-lg-6">
              <h3><span className="orange-text">Ưu đãi</span> của tháng</h3>
              <h4>Dâu tây Hikan</h4>
              <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
              <div className="time-counter">
                <div className="time-countdown clearfix" data-countdown="2024/08/01">
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Ngày</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Giờ</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Phút</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Giây</div></div>
                </div>
              </div>
              <a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Thêm vào giỏ hàng</a>
            </div>
          </div>
        </div>
      </section>
      {/* Kết thúc phần banner giỏ hàng */}

      <Footer />
      {/* Kết thúc phần nhận xét */}
    </>
  );
};

export default Home;

