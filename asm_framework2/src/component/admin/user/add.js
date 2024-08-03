import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/styleEdit.css";

const AddUser = () => {
    
    return (
        <div>
            <Header />
            <div className="col-sm-11" style={{position: "relative", left: "241px"}}>

                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Thêm Người Dùng</h4>
                        <form className="form-horizontal form-material mx-2">
                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Tên đăng nhập</label>
                                <div className="col-md-12">
                                    <input type="text" id="username" placeholder=""
                                        className="form-control-line border-input"/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Mật khẩu</label>
                                <div className="col-md-12">
                                    <input type="password" 
                                        className="form-control-line border-input"/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Email</label>
                                <div className="col-md-12">
                                    <input type="email" 
                                        className="form-control-line border-input"/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Họ và tên</label>
                                <div className="col-md-12">
                                    <input type="text" 
                                        className="form-control-line border-input"/>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Số điện thoại</label>
                                <div className="col-md-12">
                                    <input type="text" 
                                        className="form-control-line border-input"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12 d-flex">
                                    <button className="btn btn-success mx-auto mx-md-0 text-white">Thêm Người Dùng</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
