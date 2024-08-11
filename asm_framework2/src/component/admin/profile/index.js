import React from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

import avt from '../../../assets/images/users/5.jpg';


const Profile = () => {
    
    return (
        <div className="">
            <Header />
            <div className="container">

        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">Profile</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        <div className="card">
                            <div className="card-body profile-card">
                                <center className="mt-4"> 
                                    <img src={avt}
                                        className="rounded-circle" width="150" alt="User Avatar"/>
                                    <h4 className="card-title mt-2">Hanna Gover</h4>
                                    <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                    <div className="row text-center justify-content-center">
                                        <div className="col-4">
                                            <a href="#home" className="link">
                                                <i className="icon-people" aria-hidden="true"></i>
                                                <span className="value-digit">254</span>
                                            </a></div>
                                        <div className="col-4">
                                            <a href="#home" className="link">
                                                <i className="icon-picture" aria-hidden="true"></i>
                                                <span className="value-digit">54</span>
                                            </a></div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <form className="form-horizontal form-material mx-2">
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Full Name</label>
                                        <div className="col-md-12">
                                            <input type="text" placeholder="Johnathan Doe"
                                                className="form-control ps-0 form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="example-email" className="col-md-12">Email</label>
                                        <div className="col-md-12">
                                            <input type="email" placeholder="johnathan@admin.com"
                                                className="form-control ps-0 form-control-line" name="example-email"
                                                id="example-email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Password</label>
                                        <div className="col-md-12">
                                            <input type="password" value="password"
                                                className="form-control ps-0 form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Phone No</label>
                                        <div className="col-md-12">
                                            <input type="text" placeholder="123 456 7890"
                                                className="form-control ps-0 form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Message</label>
                                        <div className="col-md-12">
                                            <textarea rows="5" className="form-control ps-0 form-control-line"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Select Country</label>
                                        <div className="col-sm-12 border-bottom">
                                            <select className="form-select shadow-none ps-0 border-0 form-control-line">
                                                <option>London</option>
                                                <option>India</option>
                                                <option>Usa</option>
                                                <option>Canada</option>
                                                <option>Thailand</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12 d-flex">
                                            <button className="btn btn-success mx-auto mx-md-0 text-white">Update
                                                Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}
export default Profile;