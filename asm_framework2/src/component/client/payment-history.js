import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 60px 0;
  background: #f4f4f4;
`;

const HistoryWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h3`
  margin-bottom: 25px;
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const UserDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  td, th {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const ExitButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f44336; /* Màu đỏ */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 20px 0;

  &:hover {
    background-color: #c62828; /* Màu đỏ đậm hơn khi hover */
  }
`;

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState({});
  const [orderData, setOrderData] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPaymentData = JSON.parse(localStorage.getItem("paymentData"));
    setPaymentData(storedPaymentData || {});

    const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
    setOrderData(storedOrderData || []);

    const storedPurchasedProducts = JSON.parse(localStorage.getItem("purchasedProducts"));
    setPurchasedProducts(storedPurchasedProducts || []);
  }, []);

  const handleExit = () => {
    // Xóa thông tin giỏ hàng và thông tin thanh toán khỏi localStorage
    localStorage.removeItem("paymentData");
    localStorage.removeItem("orderData");
    localStorage.removeItem("purchasedProducts");
    
    // Chuyển hướng về trang chủ
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Xác nhận thanh toán</p>
                <h1>Thông tin thanh toán</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="container">
          <HistoryWrapper>
            <Heading>Thông tin thanh toán</Heading>
            <UserDetailsTable>
              <tbody>
                <tr>
                  <td>Họ và tên:</td>
                  <td>{paymentData.name || "Không có dữ liệu"}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{paymentData.email || "Không có dữ liệu"}</td>
                </tr>
                <tr>
                  <td>Địa chỉ:</td>
                  <td>{paymentData.address || "Không có dữ liệu"}</td>
                </tr>
                <tr>
                  <td>Thành phố:</td>
                  <td>{paymentData.city || "Không có dữ liệu"}</td>
                </tr>
                <tr>
                  <td>Mã bưu điện:</td>
                  <td>{paymentData.postalCode || "Không có dữ liệu"}</td>
                </tr>
                <tr>
                  <td>Phương thức thanh toán:</td>
                  <td>{paymentData.paymentMethod || "Không có dữ liệu"}</td>
                </tr>
              </tbody>
            </UserDetailsTable>
            <Heading>Thông tin giỏ hàng</Heading>
            <UserDetailsTable>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng cộng</th>
                </tr>
              </thead>
              <tbody>
                {orderData.length > 0 ? (
                  orderData.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}đ</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}đ</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">Không có dữ liệu đơn hàng.</td>
                  </tr>
                )}
              </tbody>
            </UserDetailsTable>
            <Heading>Sản phẩm đã mua trước đây</Heading>
            <UserDetailsTable>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng cộng</th>
                </tr>
              </thead>
              <tbody>
                {purchasedProducts.length > 0 ? (
                  purchasedProducts.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}đ</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}đ</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">Không có dữ liệu sản phẩm đã mua trước đây.</td>
                  </tr>
                )}
              </tbody>
            </UserDetailsTable>
            <ExitButton onClick={handleExit}>Thoát về trang chủ</ExitButton>
          </HistoryWrapper>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentHistory;
