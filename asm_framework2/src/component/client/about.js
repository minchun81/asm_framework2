import React from "react";
import Header from "./header";
import Footer from "./footer";

const About = () => {

    return (
        <>
        <Header/>
        <div>
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
                <p>Chúng tôi bán trái cây tươi</p>
                <h1>Về chúng tôi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần nổi bật */}
      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="featured-text">
                <h2 className="pb-3">Tại sao chọn <span className="orange-text">Fruitkha</span></h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-shipping-fast"></i>
                      </div>
                      <div className="content">
                        <h3>Giao hàng tận nhà</h3>
                        <p>Chúng tôi giao hàng tận nơi, đảm bảo chất lượng và an toàn.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-money-bill-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Giá tốt nhất</h3>
                        <p>Chúng tôi cung cấp sản phẩm với giá cả hợp lý và chất lượng cao.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <div className="content">
                        <h3>Hộp tùy chỉnh</h3>
                        <p>Chúng tôi cung cấp dịch vụ hộp tùy chỉnh theo yêu cầu của bạn.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Hoàn tiền nhanh</h3>
                        <p>Chúng tôi cung cấp dịch vụ hoàn tiền nhanh chóng nếu có vấn đề với sản phẩm.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Banner cửa hàng */}
      <section className="shop-banner">
        <div className="container">
          <h3>Giảm giá tháng 12! <br /> với <span className="orange-text">giảm giá lớn...</span></h3>
          <div className="sale-percent"><span>Giảm giá! <br /> Lên đến</span>50% <span>giảm</span></div>
          <a href="shop.html" className="cart-btn btn-lg">Mua ngay</a>
        </div>
      </section>

      {/* Phần Đội ngũ */}
      <div className="mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>Đội ngũ <span className="orange-text">của chúng tôi</span></h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-item">
                <div className="team-bg team-bg-1"></div>
                <h4>Jimmy Doe <span>Nông dân</span></h4>
                <ul className="social-link-team">
                  <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-item">
                <div className="team-bg team-bg-2"></div>
                <h4>Marry Doe <span>Nông dân</span></h4>
                <ul className="social-link-team">
                  <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-team-item">
                <div className="team-bg team-bg-3"></div>
                <h4>Simon Joe <span>Nông dân</span></h4>
                <ul className="social-link-team">
                  <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Khách hàng nhận xét */}
      

      {/* Carousel logo */}
      <div className="logo-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-slider">
                <div className="logo-thumb">
                  <img src="assets/img/company-logos/1.png" alt="" />
                </div>
                <div className="logo-thumb">
                  <img src="assets/img/company-logos/2.png" alt="" />
                </div>
                <div className="logo-thumb">
                  <img src="assets/img/company-logos/3.png" alt="" />
                </div>
                <div className="logo-thumb">
                  <img src="assets/img/company-logos/4.png" alt="" />
                </div>
                <div className="logo-thumb">
                  <img src="assets/img/company-logos/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
        </>
    )

}

export default About;
