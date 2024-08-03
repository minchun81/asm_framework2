import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const ListUser = () => {
    
    return (
        <div className="">
            <Header />
            
            {/* <!-- Bắt đầu nội dung trang --> */}
            <div className="row">
                <div className="col-sm-11" style={{position: "relative", left: "241px"}}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Danh sách người dùng</h4>
                            <span><a href='/admin/addUser' className="btn btn-primary mb-3">Thêm Người Dùng</a></span>
                            <div className="table-responsive">
                                <table className="table user-table">
                                    <thead>
                                        <tr>
                                            <th className="border-top-0">ID</th>
                                            <th className="border-top-0">Tên đăng nhập</th>
                                            <th className="border-top-0">Mật khẩu</th>
                                            <th className="border-top-0">Email</th>
                                            <th className="border-top-0">Họ và tên</th>
                                            <th className="border-top-0">Số điện thoại</th>
                                            <th className="border-top-0">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Genelia</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Ritesh</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Govinda</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Hritik</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Maruti</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>minhtrung</td>
                                            <td>trung123</td>
                                            <td>@Sonu</td>
                                            <td>Huynh Minh Trung</td>
                                            <td>01665202865</td>
                                            <td> 
                                                <div className="d-flex gap-2">
                                                    <span><a href='/admin/editUser' className="btn btn-primary">Sửa</a></span>
                                                    <span><button className="btn btn-danger">Xóa</button></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kết thúc nội dung trang */}
        </div>
    );
};

export default ListUser;
