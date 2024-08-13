import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const Container = styled.div`
  padding: 60px 0;
  background: #f4f4f4;
`;

const FormWrapper = styled.div`
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

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1.1rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  display: block;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'creditCard'
  });

  const [orderData, setOrderData] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
    setOrderData(storedOrderData || []);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Họ và tên là bắt buộc';
    if (!formData.email) newErrors.email = 'Email là bắt buộc';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email không hợp lệ';
    if (!formData.address) newErrors.address = 'Địa chỉ là bắt buộc';
    if (!formData.city) newErrors.city = 'Thành phố là bắt buộc';
    if (!formData.postalCode) newErrors.postalCode = 'Mã bưu điện là bắt buộc';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      // Lưu thông tin thanh toán vào localStorage
      localStorage.setItem("paymentData", JSON.stringify(formData));

      // Chuyển hướng đến trang lịch sử thanh toán
      navigate('/payment-history');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Thanh toán</p>
                <h1>Thông tin thanh toán</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FormWrapper>
                <form onSubmit={handleSubmit}>
                  <Heading>Thông tin người dùng</Heading>
                  <FormGroup>
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Nhập họ và tên"
                    />
                    {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Nhập email"
                    />
                    {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input 
                      type="text" 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      placeholder="Nhập địa chỉ"
                    />
                    {errors.address && <div className="alert alert-danger">{errors.address}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="city">Thành phố</Label>
                    <Input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleChange} 
                      placeholder="Nhập thành phố"
                    />
                    {errors.city && <div className="alert alert-danger">{errors.city}</div>}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="postalCode">Mã bưu điện</Label>
                    <Input 
                      type="text" 
                      id="postalCode" 
                      name="postalCode" 
                      value={formData.postalCode} 
                      onChange={handleChange} 
                      placeholder="Nhập mã bưu điện"
                    />
                    {errors.postalCode && <div className="alert alert-danger">{errors.postalCode}</div>}
                  </FormGroup>

                  <Heading>Phương thức thanh toán</Heading>
                  <RadioGroup>
                    <RadioLabel>
                      <RadioInput 
                        type="radio" 
                        name="paymentMethod" 
                        value="creditCard" 
                        checked={formData.paymentMethod === 'creditCard'} 
                        onChange={handleChange} 
                      />
                      Thẻ tín dụng
                    </RadioLabel>
                    <RadioLabel>
                      <RadioInput 
                        type="radio" 
                        name="paymentMethod" 
                        value="paypal" 
                        checked={formData.paymentMethod === 'paypal'} 
                        onChange={handleChange} 
                      />
                      PayPal
                    </RadioLabel>
                  </RadioGroup>

                  <Button type="submit">Hoàn tất thanh toán</Button>
                </form>
              </FormWrapper>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Checkout;
