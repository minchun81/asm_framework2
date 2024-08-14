import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from '../../services/Auth'; // Import hàm login từ services
import { useCookies } from 'react-cookie';
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState,
  } = useForm();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token', 'role']);
  const onSubmit = async (data) => {
    try {
      const result = await login(data.username, data.password);
      console.log('Kết quả đăng nhập:', result);
  
      if (result && result.token && result.role !== undefined) {
        const { token, role } = result;
  
        // Lưu trữ token và role vào cookie
        setCookie('token', token);
        setCookie('role', role.toString());
  
          navigate('/'); // Hoặc điều hướng đến trang khác nếu cần
      } else {
        console.error('Không tìm thấy token hoặc role trong phản hồi');
        setError('username', { type: 'manual', message: 'Lỗi hệ thống: Không tìm thấy token hoặc role' });
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setError('username', { type: 'manual', message: 'Tài khoản hoặc mật khẩu không đúng' });
    }
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
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#2" className="social-icon d-flex align-items-center justify-content-center">
                          <i className="bi bi-google"></i>
                        </a>
                      </p>
                    </div>

                  </div>
                  <form action="#" className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="username">Username</label>
                      <input type="text" className="form-control" placeholder="Username" {...register("username", {
                        required: {
                          value: true,
                          message: "Username cannot be empty!"
                        },
                        minLength: {
                          value: 5,
                          message: "Username has at least 5 characters!"
                        }
                      })}/>
                      {formState.errors.username && (
                        <small className='text-danger'>
                          {formState.errors.username.message}
                        </small>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Password</label>
                      <input type="password" className="form-control" placeholder="Password" {...register("password", {
                        required: {
                          value: true,
                          message: "Password cannot be empty!"
                        },
                        minLength: {
                          value: 5,
                          message: "Password has at least 5 characters!"
                        }
                      })}/>
                      {formState.errors.password && (
                        <small className='text-danger'>
                          {formState.errors.password.message}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary rounded submit px-3">
                        Sign In
                      </button>
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
