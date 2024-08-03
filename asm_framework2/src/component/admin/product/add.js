import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/styleEdit.css";

const AddProduct = () => {
    return (
        <div>
            <Header />
            <div className="col-sm-11" style={{ position: "relative", left: "241px" }}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Thêm Sản Phẩm</h4>
                        <form className="form-horizontal form-material mx-2">
                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Tên Sản Phẩm</label>
                                <div className="col-md-12">
                                    <input type="text" id="fullname" placeholder="Nhập tên sản phẩm"
                                        className="form-control-line border-input" />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="col-md-12 font-weight-bold">Hình Ảnh</label>
                                <div className="col-md-12">
                                    <input type="file" className="form-control-line border-input" />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Giá</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control-line border-input" placeholder="Nhập giá sản phẩm"/>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">ID Danh Mục</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control-line border-input" placeholder="Nhập ID danh mục"/>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="col-md-12 mb-0">Mô Tả</label>
                                <div className="col-md-12">
                                    <textarea rows="5" className="border-input2 form-control-line" placeholder="Nhập mô tả sản phẩm"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12 d-flex">
                                    <button className="btn btn-success mx-auto mx-md-0 text-white">Thêm Sản Phẩm</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddProduct;
