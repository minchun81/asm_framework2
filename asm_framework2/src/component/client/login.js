import React from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/login.css';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Login } from "../../redux/actions/Auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(Login(data)); // Dispatch action login
    navigate("/"); // Chuyển hướng đến trang admin sau khi đăng nhập thành công
  };


  return (
    <div className='container'>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="login-wrap p-4 p-md-5" style={{ flex: 1 }}>
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a href="#1" className="social-icon d-flex align-items-center justify-content-center">
                          <span className="fas fa-facebook"><i className="bi bi-facebook"></i></span>
                        </a>
                        <a href="#2" className="social-icon d-flex align-items-center justify-content-center">
                          <span className="fas fa-google"><i className="bi bi-google"></i></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form  className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Username</label>
                      <input type="text" className="form-control" placeholder="Username" required {...register("username")} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Password</label>
                      <input type="password" className="form-control" placeholder="Password" required {...register("password")} />
                    </div>
                    <div className="form-group">
                      <button type="submit" onClick={handleSubmit(onSubmit)} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a href="#forget" className="forgot-password">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">Don't have an account? <a style={{ color: "#e3b04b" }} data-toggle="tab" href="/register">Sign Up</a></p>
                </div>
                <div className="text-center p-4 p-md-5" style={{ background: 'linear-gradient(to right, #d4edda, #155724)', flex: 1, color: 'white', textAlign: 'right' }}>
                  <h2>Login</h2>
                  <p>Login to use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
