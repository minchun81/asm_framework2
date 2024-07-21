import React from "react";
import Header from "./header";
import Footer from "./footer";

const About = () => {

    return (
        <>
        <Header/>
        <div>
      {/* Search Area */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">Search <i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>We sale fresh fruits</p>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="featured-text">
                <h2 className="pb-3">Why <span className="orange-text">Fruitkha</span></h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-shipping-fast"></i>
                      </div>
                      <div className="content">
                        <h3>Home Delivery</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-money-bill-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Best Price</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <div className="content">
                        <h3>Custom Box</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Quick Refund</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Banner */}
      <section className="shop-banner">
        <div className="container">
          <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
          <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
          <a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Team Section */}
      <div className="mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>Our <span className="orange-text">Team</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-item">
                <div className="team-bg team-bg-1"></div>
                <h4>Jimmy Doe <span>Farmer</span></h4>
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
                <h4>Marry Doe <span>Farmer</span></h4>
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
                <h4>Simon Joe <span>Farmer</span></h4>
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

      {/* Testimonial Section */}
      <div className="testimonail-section mt-80 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="testimonial-sliders">
                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="assets/img/avaters/avatar1.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>Saira Hakim <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="assets/img/avaters/avatar2.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>David Niph <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src="assets/img/avaters/avatar3.png" alt="" />
                  </div>
                  <div className="client-meta">
                    <h3>Jacob Sikim <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
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

export default About