import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    color: darkred;
  }
`;

const SearchArea = styled.div`
  /* CSS cho khu vực tìm kiếm */
`;

const BreadcrumbSection = styled.div`
  /* CSS cho phần breadcrumb */
`;

const CartSection = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
`;

const CartTableWrap = styled.div`
  /* CSS cho phần wrap bảng giỏ hàng */
`;

const CartTable = styled.table`
  /* CSS cho bảng giỏ hàng */
`;

const TotalSection = styled.div`
  /* CSS cho phần tổng cộng */
`;

const CheckoutButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: Orange;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity > 0 && quantity <= 20) {
      const updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 45; // Cố định phí vận chuyển
    return subtotal + shipping;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
      return;
    }
    // Lưu thông tin giỏ hàng vào localStorage để dùng trong trang thanh toán
    localStorage.setItem("orderData", JSON.stringify(cartItems));
    
    // Điều hướng đến trang thanh toán
    navigate('/checkout');
  };

  return (
    <>
      <Header />

      <SearchArea className="search-area">
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
      </SearchArea>

      <BreadcrumbSection className="breadcrumb-section breadcrumb-bg">
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
      </BreadcrumbSection>

      <CartSection className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <CartTableWrap className="cart-table-wrap">
                <CartTable className="cart-table">
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
                    {cartItems.length > 0 ? (
                      cartItems.map(item => (
                        <tr className="table-body-row" key={item.id}>
                          <td className="product-remove">
                            <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                              <i className="far fa-window-close"></i>
                            </RemoveButton>
                          </td>
                          <td className="product-image"><img src={item.image} alt={item.name} width="100" /></td>
                          <td className="product-name">{item.name}</td>
                          <td className="product-price">{item.price}đ</td>
                          <td className="product-quantity">
                            <input 
                              type="number" 
                              value={item.quantity} 
                              min="1" 
                              max="20" 
                              onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                            />
                          </td>
                          <td className="product-total">{item.price * item.quantity}đ</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">Giỏ hàng của bạn đang trống.</td>
                      </tr>
                    )}
                  </tbody>
                </CartTable>
              </CartTableWrap>
            </div>
            <div className="col-lg-4">
              <TotalSection className="total-section">
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
                      <td>{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}đ</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Vận chuyển: </strong></td>
                      <td>45đ</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Tổng cộng: </strong></td>
                      <td>{calculateTotal()}đ</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <CheckoutButton onClick={handleCheckout}>Thanh toán</CheckoutButton>
                </div>
              </TotalSection>
            </div>
          </div>
        </div>
      </CartSection>

      <Footer />
    </>
  );
};

export default Cart;
