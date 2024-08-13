import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './header';
import Footer from './footer';

const Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Giả sử bạn có một danh sách sản phẩm tĩnh hoặc lấy từ API
    const fetchProduct = async () => {
      // Thay thế bằng API call hoặc dữ liệu tĩnh
      const products = [
        { id: 1, name: 'dây tây không hạt', image: '/path/to/image1.jpg', price: 50 },
        { id: 2, name: 'Berry', image: '/path/to/image2.jpg', price: 70 },
        // Add more products as needed
      ];

      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Check if product is available
    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  return (
    <>
      <Header />
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

      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                {product && <img src={product.image} alt={product.name} />}
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>{product ? product.name : 'Loading...'}</h3>
                <p className="single-product-pricing">
                  <span>Per Kg</span> {product ? product.price : 'Loading...'}đ
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                <div className="single-product-form">
                  <input type="number" placeholder="0" />
                  <a href="#" onClick={handleAddToCart} className="cart-btn mt-3">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </a>
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

      <Footer />
    </>
  );
};

export default Detail;
