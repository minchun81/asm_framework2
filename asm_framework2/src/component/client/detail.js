import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Ensure to have the relevant styles in this CSS file
import Header from './header';
import Footer from './footer';
import product1 from "../../assets/img/products/product-img-1.jpg"
import product2 from "../../assets/img/products/product-img-2.jpg"
import product3 from "../../assets/img/products/product-img-3.jpg"
import product4 from "../../assets/img/products/product-img-4.jpg"
import product5 from "../../assets/img/products/product-img-5.jpg"
import product6 from "../../assets/img/products/product-img-6.jpg"
const Detail = () => {
  return (
    <>
        <Header/>
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
                <p>See more Details</p>
                <h1>Single Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Single Product Section */}
      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                <img src={product1} alt="cherry" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>dây tây không hạt</h3>
                <p className="single-product-pricing"><span>Per Kg</span> $50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                <div className="single-product-form">
                  <form action="index.html">
                    <input type="number" placeholder="0" />
                  </form>
                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                  <p><strong>Categories: </strong>Fruits, Organic</p>
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href=""><i className="fab fa-twitter"></i></a></li>
                  <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* More Products Section */}
      <div className="more-products mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">  
                <h3><span className="orange-text">Related</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/detail"><img src={product1} alt="Strawberry" /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> $85 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product2} alt="Berry" /></a>
                </div>
                <h3>Berry</h3>
                <p className="product-price"><span>Per Kg</span> $70 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product4} alt="Lemon" /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> $35 </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Carousel */}
      {/* <div className="logo-carousel-section">
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
      </div> */}
      <Footer/>
    </>
  );
};

export default Detail;
