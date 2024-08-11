import React from "react";
import Header from "./header";
import Footer from "./footer";
import a from "../../assets/img/a.jpg"
import produc1 from "../../assets/img/products/product-img-1.jpg"
import produc2 from "../../assets/img/products/product-img-2.jpg"
import produc3 from "../../assets/img/products/product-img-3.jpg"

const Home = () =>{

   return (
    <>
    <Header/>
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
      {/* <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Area */}
      <div className="hero-area hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  <p className="subtitle">Fresh & Organic</p>
                  <h1>Delicious Seasonal Fruits</h1>
                  <div className="hero-btns">
                    <a href="shop.html" className="boxed-btn">Fruit Collection</a>
                    <a href="contact.html" className="bordered-btn">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Area */}

      {/* Features List Section */}
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="content">
                  <h3>Free Shipping</h3>
                  <p>When order over $75</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync"></i>
                </div>
                <div className="content">
                  <h3>Refund</h3>
                  <p>Get refund within 3 days!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features List Section */}

      {/* Product Section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span className="orange-text">Our</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/detail"><img src={produc1} alt="" /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> 85$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/detail"><img src={produc2} alt="" /></a>
                </div>
                <h3>Berry</h3>
                <p className="/detail"><span>Per Kg</span> 70$ </p>
                <a href="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/detail"><img src={produc3} alt="" /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> 35$ </p>
                <a href="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/detail"><img src={produc2} alt="" /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> 35$ </p>
                <a href="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Section */}

      {/* Cart Banner Section */}
      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
            <div className="image-column col-lg-6">
              <div className="image">
                <div className="price-box">
                  <div className="inner-price">
                    <span className="price">
                      <strong>30%</strong> <br /> off per kg
                    </span>
                  </div>
                </div>
                <img src={a} alt="" />
              </div>
            </div>
            <div className="content-column col-lg-6">
              <h3><span className="orange-text">Deal</span> of the month</h3>
              <h4>Hikan Strwaberry</h4>
              <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
              <div className="time-counter">
                <div className="time-countdown clearfix" data-countdown="2020/2/01">
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Days</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Hours</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Mins</div></div>
                  <div className="counter-column"><div className="inner"><span className="count">00</span>Secs</div></div>
                </div>
              </div>
              <a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
        </div>
      </section>
      {/* End Cart Banner Section */}

      {/* Testimonial Section */}
      <div className="testimonail-section mt-150 mb-150">
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
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
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
                    <h3>Daniel <span>Local shop owner</span></h3>
                    <p className="testimonial-body">
                      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
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
      <Footer/>
      {/* End Testimonial Section */}
    </>
   ) 

}
export default Home