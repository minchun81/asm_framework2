import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "../../../assets/css/styleEdit.css"

const AddCategory = () => {
    
    return (
<div>
<Header />
    <div className="col-sm-11" style={{position: "relative", left: "241px"}}>
    <div className="card">
        <div className="card-body">
        <h4 className="card-title">Thêm Danh Mục</h4>
            <form className="form-horizontal form-material mx-2">
                <div className="form-group mb-3">
                    <label className="col-md-12 mb-0">Tên Danh Mục</label>
                    <div className="col-md-12">
                    <input type="text" id="fullname" placeholder=""
                        className="form-control-line border-input"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 d-flex">
                        <button className="btn btn-success mx-auto mx-md-0 text-white">Thêm Danh Mục</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
);
};

export default AddCategory;
