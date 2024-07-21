import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/styleEdit.css"

const AddUser = () => {
    
    return (
<div>
<Header />

    <div className="card">
        <div className="card-body">
        <h4 className="card-title">Add User</h4>
            <form class="form-horizontal form-material mx-2">
                <div className="form-group mb-3">
                    <label className="col-md-12 mb-0">Username</label>
                    <div class="col-md-12">
                    <input type="text" id="fullname" placeholder=""
                        className=" form-control-line border-input"/>
                    </div>
                </div>
                
                <div class="form-group mb-3">
                    <label class="col-md-12 mb-0">Password</label>
                    <div class="col-md-12">
                        <input type="text"class="form-control-line border-input"/>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label class="col-md-12 mb-0">Email</label>
                    <div class="col-md-12">
                        <input type="email" 
                            class="form-control-line border-input"/>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label class="col-md-12 mb-0">Full name</label>
                    <div class="col-md-12">
                        <input type="email" 
                            class="form-control-line border-input"/>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label class="col-md-12 mb-0">Phone number</label>
                    <div class="col-md-12">
                        <input type="email" 
                            class="form-control-line border-input"/>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-12 d-flex">
                        <button class="btn btn-success mx-auto mx-md-0 text-white">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
);
};

export default AddUser;