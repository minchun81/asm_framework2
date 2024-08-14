import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './header';
import Footer from './footer';
import { getProductById } from '../../services/product'; // Đảm bảo đường dẫn đúng

const Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      getProductById(id, setProduct, setError);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex(p => p.id === product.id);

    if (productIndex > -1) {
      existingCart[productIndex].quantity += quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
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
                {product ? (
                  <img src={`http://localhost:3001/uploads/${product.image}`} alt={product.name} />
                ) : (
                  <p>Loading...</p>
                )}
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
                  <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <a href="#" onClick={handleAddToCart} className="cart-btn mt-3">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </a>
                  <p><strong>Categories: </strong>Fruits, Organic</p>
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
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
