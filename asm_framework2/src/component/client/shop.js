import React from 'react';
import Header from './header';
import Footer from './footer';
import product1 from "../../assets/img/products/product-img-1.jpg"
import product2 from "../../assets/img/products/product-img-2.jpg"
import product3 from "../../assets/img/products/product-img-3.jpg"
import product4 from "../../assets/img/products/product-img-4.jpg"
import product5 from "../../assets/img/products/product-img-5.jpg"
import product6 from "../../assets/img/products/product-img-6.jpg"
 // Ensure to have the relevant styles in this CSS file

const Shop = () => {
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
                <p>Fresh and Organic</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="product-section mt-150 mb-150">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".strawberry">Strawberry</li>
                  <li data-filter=".berry">Berry</li>
                  <li data-filter=".lemon">Lemon</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            <div className="col-lg-4 col-md-6 text-center strawberry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product1} alt="" /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> 85$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center berry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product2} alt="" /></a>
                </div>
                <h3>Berry</h3>
                <p className="product-price"><span>Per Kg</span> 70$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center lemon">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product3}  alt="" /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> 35$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product4} alt="" /></a>
                </div>
                <h3>Avocado</h3>
                <p className="product-price"><span>Per Kg</span> 50$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product5} alt="" /></a>
                </div>
                <h3>Green Apple</h3>
                <p className="product-price"><span>Per Kg</span> 45$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center strawberry">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src={product6} alt="" /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> 80$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li><a href="#">Prev</a></li>
                  <li><a href="#">1</a></li>
                  <li><a className="active" href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
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
              <div className="logo-carousel-inner">
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/1.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/2.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/3.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/4.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/5.png" alt="" />
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

export default Shop;
