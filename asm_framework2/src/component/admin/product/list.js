import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const ListProduct = () => {
    return (
        <div className="">
            {/* <!-- Start Page Content --> */}
            <Header />

            <div className="row">
                <div className="col-sm-10" style={{position: "relative", left: "241px"}}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Danh Sách Sản Phẩm</h4>
                            <span><a href='/admin/addProduct' className="btn btn-primary mb-3">Thêm Sản Phẩm</a></span>

                            <div className="table-responsive">
                                <table className="table user-table text-center">
                                    <thead>
                                        <tr className='table-light'>
                                            <th className="border-top-0">ID</th>
                                            <th className="border-top-0">Tên</th>
                                            <th className="border-top-0">Giá</th>
                                            <th className="border-top-0">Hình Ảnh</th>
                                            <th className="border-top-0">ID Danh Mục</th>
                                            <th className="border-top-0">Mô Tả</th>
                                            <th className="border-top-0">Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody className='align-middle'>
                                        <tr>
                                            <td>1</td>
                                            <td>Táo Xanh</td>
                                            <td>trung123</td>
                                            <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2 justify-content-center">
                                                    <span><a href='/admin/editProduct' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Các hàng khác */}
                                        <tr>
                                            <td>2</td>
                                            <td>Minhtrung</td>
                                            <td>trung123</td>
                                            <td><img width={"150px"} src={"https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"} alt="Example" /></td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2 justify-content-center">
                                                    <span><a href='/admin/editProduct' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Thêm các hàng khác nếu cần */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Page Content */}
            <Footer />
        </div>
    );
};

export default ListProduct;
