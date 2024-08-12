import React, { useEffect } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/login.css';


const Register = () => {
	const {
		register,
		getValues,
		handleSubmit,
		setValue,
		setError,
		reset,
		formState,
	  } = useForm();
	  const navigate = useNavigate();
	  const registerSubmit = async (value) => {
		console.log("value submit === ", value);
	
		try {
		  console.log("start call api");
		  const res = await axios.post("http://localhost:3001/api/user", {
			name: value?.name,
			username: value?.username,
			email: value?.email,
			password: value?.password,
			full_name: value?.name,
		  });
	
		  console.log("response === ", res);
		  console.log("end call api");
		  alert("Register Successfull!");
     	  navigate("/login");
		} catch (err) {
		  console.log("error === ", err);
		  alert("Register Fialed!");

		}
	  };
  return (
    <div className='container'>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Register</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="login-wrap p-4 p-md-5" style={{ flex: 1 }}>
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign Up</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                        <span className="fas fa-facebook"><i className="bi bi-facebook"></i></span>
                          
                        </a>
                        <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                        <span className="fas fa-google"><i className="bi bi-google"></i></span>
                          
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" className="signin-form" >
				  <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Name</label>
                      <input type="text" className="form-control" name='name' placeholder="Name" required {...register("name",{
                        required: {
                            value: true,
                            message: "Name cannot be empty!"
                        },
                        minLength: {
                            value: 5,
                            message: "Name has at least 5 characters!"
                        }
                    })}/>
                    {formState?.errors?.name && (
                        <small className='text-danger'>{
                        formState?.errors?.name?.message
                    }</small>
                    )}
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Username</label>
                      <input type="text" className="form-control" name='username' placeholder="Username" required {...register("username",{
                        required: {
                            value: true,
                            message: "Username cannot be empty!"
                        },
                        minLength: {
                            value: 5,
                            message: "Username has at least 5 characters!"
                        }
                    })}/>
                    {formState?.errors?.username && (
                        <small className='text-danger'>{
                        formState?.errors?.username?.message
                    }</small>
                    )}
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Password</label>
                      <input type="password" className="form-control" name='password' placeholder="Password" required {...register("password",{
                        required: {
                            value: true,
                            message: "Password cannot be empty!"
                        },
                        minLength: {
                            value: 5,
                            message: "Password has at least 5 characters!"
                        }
                    })}/>
                    {formState?.errors?.password && (
                        <small className='text-danger'>{
                        formState?.errors?.password?.message
                    }</small>
                    )}
                    </div>
					<div className="form-group mb-3">
                      <label className="label" htmlFor="name">Email</label>
                      <input type="email" className="form-control" name='email' placeholder="Email" required {...register("email",{
                        required: {
                            value: true,
                            message: "Email cannot be empty!"
                        },
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email invalidate"
                        }
                    })}/>
					{formState?.errors?.email && (
                        <small className='text-danger'>{
                        formState?.errors?.email?.message
                    }</small>
                    )}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary rounded submit px-3"
					  onClick={handleSubmit(registerSubmit)}
					  >Sign In</button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a href="#" className="forgot-password">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">Have an account? <a style={{color: "#e3b04b"}} data-toggle="tab" href="/login">Sign In</a></p>
                </div>
                <div className="text-center p-4 p-md-5" style={{ background: 'linear-gradient(to right, #d4edda, #155724)', flex: 1, color: 'white', textAlign: 'right' }}>
                  <h2>Register</h2>
                  <p>You must register to be able to pay and buy all the products you want, if you do not register and log in you will not be able to use our service, have a nice day!!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};





export default Register;
